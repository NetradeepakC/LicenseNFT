// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./Ownership.sol";
import "./Translator.sol";

contract License is ERC721, ERC721URIStorage, Whitelist, Translator {
    using Counters for Counters.Counter;

    mapping(string => bool) private existingURIs;

    constructor() ERC721("License", "License") {}

    // function _baseURI() internal pure override returns (string memory) {
    //     return "ipfs://";
    // }

    function mint(
        address to,
        uint256 tokenId,
        string memory uri,
        uint24 day
    ) public onlyRegistered returns (uint256) {
        require(!existingURIs[uri], "URI already in use.");
        addSerial(tokenId);
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        existingURIs[uri] = true;
        return tokenId;
    }

    function safeBurn(uint256 tokenId) public onlyMember(tokenId) {
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
