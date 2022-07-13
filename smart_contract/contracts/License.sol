// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./Ownership.sol";
import "./Translator.sol";

contract License is ERC721, ERC721URIStorage, Whitelist, Translator {
    using Counters for Counters.Counter;

    mapping(string => bool) private existingURIs;
    uint24[] private maxTime;

    constructor() ERC721("License", "License") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function safeMint(
        address to,
        string memory uri,
        uint24 day
    ) public onlyRegistered returns (uint256) {
        require(!existingURIs[uri], "URI already in use.");
        uint256 serial = addSerial();
        _safeMint(to, serial);
        _setTokenURI(serial, uri);
        existingURIs[uri] = true;
        maxTime.push(day);
        return serial;
    }

    function get10() public returns (uint256) {
        return 10;
    }

    function pureget10() public pure returns (uint256) {
        return 10;
    }

    function safeBurn(uint256 serial) public onlyMember(serial) {
        super._burn(serial);
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
