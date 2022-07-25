// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./Ownership.sol";
import "./Misc.sol";

contract License is ERC721, ERC721URIStorage, Whitelist {
    mapping(string => bool) private existingURIs;
    mapping(address => string) private addressURIMap;

    constructor() ERC721("License", "License") {}

    // function _baseURI() internal pure override returns (string memory) {
    //     return "ipfs://";
    // }

    function mint(
        string memory name,
        uint256 serialID,
        address to,
        uint16[] memory seeds,
        string memory uri,
        uint64 secs,
        ProductType pType
    ) public onlySellar(msg.sender) {
        require(usedBrandIDs[to], "Only registered members allowed");
        require(!existingURIs[uri], concatenate(uri, " : URI already in use."));
        uint256 tokenId = combine(seeds);
        require(!usedSerials[tokenId], "Serial ID must be unused");
        addSerial(tokenId);
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        existingURIs[uri] = true;
        addressSoldListMap[msg.sender].push(tokenId);
        usedSerials[tokenId] = true;
        serialProductMap[tokenId] = product(
            name,
            serialID,
            msg.sender,
            uint64(block.timestamp),
            secs,
            false,
            pType
        );
    }

    function safeBurn(uint256 tokenId) internal {
        deletedSerials[tokenId] = true;
        uint256 i;
        for (i = 0; i < addressBoughtListMap[msg.sender].length; i++) {
            if (addressBoughtListMap[msg.sender][i] == tokenId) {
                addressBoughtListMap[msg.sender][i] = 0;
                break;
            }
        }
        _burn(tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function setTokenURI(uint16[] memory parts) public returns (string memory) {
        uint256 tokenId = combine(parts);
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
            (current - serialProductMap[tokenId].birthtime) >=
            serialProductMap[tokenId].lifespan
        ) {
            safeBurn(tokenId);
            addressURIMap[msg.sender] = "License is expired";
        } else {
            addressURIMap[msg.sender] = super.tokenURI(tokenId);
        }
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return addressURIMap[msg.sender];
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 serial
    ) internal virtual override {
        if (from != address(0)) {
            uint256 i;
            for (i = 0; i < addressBoughtListMap[from].length; i++) {
                if (addressBoughtListMap[from][i] == serial) {
                    addressBoughtListMap[from][i] = 0;
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
            addressBoughtListMap[to].push(serial);
            serialOwnerListMap[serial].push(to);
            serialProductMap[serial].onSale = false;
        }
    }
}
