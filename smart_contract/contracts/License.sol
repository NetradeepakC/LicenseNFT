// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./Ownership.sol";
import "./Misc.sol";

contract License is ERC721, ERC721URIStorage, Whitelist {
    mapping(string => bool) private existingURIs;
    mapping(address => string) internal addressURIMap;

    constructor() ERC721("License", "License") {}

    // function _baseURI() internal pure override returns (string memory) {
    //     return "ipfs://";
    // }

    uint256 public time;

    function getTime() public view returns (string memory) {
        return uintToString(time);
    }

    function mint(
        string memory name,
        uint256 serialID,
        address to,
        uint16[] memory seeds,
        string memory uri,
        uint64 secs
    ) public onlyRegistered onlySellar(msg.sender) {
        require(usedBrandIDs[to], "Only registered members allowed");
        require(!existingURIs[uri], "URI already in use.");
        uint256 tokenId = combine(seeds);
        addSerial(tokenId);
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        existingURIs[uri] = true;
        serialProductMap[tokenId] = product(
            name,
            serialID,
            msg.sender,
            uint64(block.timestamp),
            secs,
            false
        );
        time = block.timestamp;
    }

    function safeBurn(uint256 tokenId) internal {
        usedSerials[tokenId] = false;
        serialProductMap[tokenId] = product(
            "",
            0,
            address(0),
            uint64(0),
            uint64(0),
            false
        );
        _setTokenURI(tokenId, "");
        _burn(tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function getTokenURI() public view returns (string memory) {
        return addressURIMap[msg.sender];
    }

    function setTokenURI(uint16[] memory parts) public returns (string memory) {
        uint64 current = uint64(block.timestamp);
        uint256 tokenId = combine(parts);
        if (
            (current - serialProductMap[tokenId].birthtime) >=
            serialProductMap[tokenId].lifespan
        ) {
            safeBurn(tokenId);
            require(false, "License is already expired");
        }
        addressURIMap[msg.sender] = tokenURI(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        require(
            msg.sender == serialProductMap[tokenId].sellar ||
                msg.sender ==
                serialOwnerListMap[tokenId][
                    serialOwnerListMap[tokenId].length - 1
                ],
            "Only the owner of this address can see it's details"
        );
        uint64 current = uint64(block.timestamp);
        if (
            (current - serialProductMap[tokenId].birthtime) <
            serialProductMap[tokenId].lifespan
        ) {
            //return super.tokenURI(tokenId);
            return uintToString(current);
        }
        return "Illegal Access";
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 serial
    ) internal virtual override {
        if (from != address(0)) {
            uint256 i;
            for (i = 0; i < addressUserMap[from].boughtList.length; i++) {
                if (addressUserMap[from].boughtList[i] == serial) {
                    addressUserMap[from].boughtList[i] = addressUserMap[from]
                        .boughtList[addressUserMap[from].boughtList.length - 1];
                    addressUserMap[from].boughtList.pop();
                    break;
                }
            }
        }
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 serial
    ) internal virtual override {
        if (to != address(0)) {
            addressUserMap[to].boughtList.push(serial);
            serialOwnerListMap[serial].push(to);
            serialProductMap[serial].onSale = false;
        }
    }
}
