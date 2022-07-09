// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Ownership.sol";
import "hardhat/console.sol";

contract LicenseERC721 is ERC721, ERC721URIStorage, Whitelist {
    using Counters for Counters.Counter;

    mapping(string => bool) private existingURIs;
    uint24[] private maxTime;

    constructor() ERC721("LicenseERC721", "LicenseERC721") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function safeMint(
        address to,
        string memory uri,
        uint256 serial,
        uint24 day
    ) public onlyMember returns (uint256) {
        require(!existingURIs[uri], "URI already in use.");
        _safeMint(to, serial);
        _setTokenURI(serial, uri);
        existingURIs[uri] = true;
        maxTime.push(day);
        return serial;
    }

    function safeBurn(uint256 tokenId)
        override
        onlyMember(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
