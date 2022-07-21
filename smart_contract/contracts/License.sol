// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./Ownership.sol";
import "./Misc.sol";

contract License is ERC721, ERC721URIStorage, Whitelist {
    using Counters for Counters.Counter;

    mapping(string => bool) private existingURIs;

    constructor() ERC721("License", "License") {}

    // function _baseURI() internal pure override returns (string memory) {
    //     return "ipfs://";
    // }

    function mint(
        string memory name,
        address to,
        uint16[] memory seeds,
        string memory uri,
        uint24 day
    ) public onlyRegistered onlySellar(msg.sender) {
        require(!existingURIs[uri], "URI already in use.");
        uint256 tokenId = combine(seeds);
        addSerial(tokenId);
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        existingURIs[uri] = true;
        serialProductMap[tokenId] = product(
            name,
            msg.sender,
            null_add_arr,
            uint64(block.timestamp),
            day
        );
    }

    function safeBurn(uint16[] memory parts) internal {
        _safeBurn(combine(parts));
    }

    function _safeBurn(uint256 tokenId) internal {
        usedSerials[tokenId] = false;
        serialProductMap[tokenId] = null_product;
        _setTokenURI(tokenId, "");
        _burn(tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function getTokenURI(uint16[] memory parts)
        public
        view
        returns (string memory)
    {
        return tokenURI(combine(parts));
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
                serialProductMap[tokenId].ownerList[
                    serialProductMap[tokenId].ownerList.length - 1
                ],
            "Only the owner of this address can see it's details"
        );
        uint64 current = uint64(block.timestamp);
        if (
            (current - serialProductMap[tokenId].birthtime) / (24 * 3600) <
            serialProductMap[tokenId].lifespan
        ) {
            return super.tokenURI(tokenId);
        } else {
            require(false, "License is already expired");
        }
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
            serialProductMap[serial].ownerList.push(to);
        }
    }
}
