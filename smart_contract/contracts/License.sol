// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./Ownership.sol";
import "./Misc.sol";

contract License is ERC721, ERC721URIStorage, Whitelist {
    using Counters for Counters.Counter;

    mapping(string => bool) private existingURIs;
    mapping(uint256 => uint256) private birthtime;
    mapping(uint256 => uint24) private lifespan;

    constructor() ERC721("License", "License") {}

    // function _baseURI() internal pure override returns (string memory) {
    //     return "ipfs://";
    // }

    function mint(
        address to,
        uint16[] memory seeds,
        string memory uri,
        uint24 day
    ) public onlyRegistered returns (uint256) {
        require(!existingURIs[uri], "URI already in use.");
        uint256 tokenId = combine(seeds);
        addSerial(tokenId);
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        existingURIs[uri] = true;
        pass = tokenId;
        birthtime[tokenId] = block.timestamp;
        lifespan[tokenId] = day;
        return tokenId;
    }

    function safeBurn(uint16[] memory parts) public {
        _safeBurn(combine(parts));
    }

    function _safeBurn(uint256 tokenId) internal onlyMember(tokenId) {
        super._burn(tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function getTokenURI(uint16[] memory parts) public returns (string memory) {
        uint256 tokenId = combine(parts);
        uint256 current = block.timestamp;
        if ((current - birthtime[tokenId]) < lifespan[tokenId]) {
            return super.tokenURI(tokenId);
        } else {
            birthtime[tokenId] = 0;
            lifespan[tokenId] = 0;
            usedSerials[tokenId] = false;
            serialBrandMap[tokenId] = address(0);
            _burn(tokenId);
            require(false, "License is already expired");
            return "Ilegal Access: 0";
        }
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        require(false, "Incorrent Token string fetcher used");
        return "Illegal Access: 1";
    }
}
