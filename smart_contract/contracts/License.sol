// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./Ownership.sol";
import "./Misc.sol";

contract License is ERC721, ERC721URIStorage, Whitelist {
    using Counters for Counters.Counter;

    mapping(string => bool) private existingURIs;
    mapping(uint256 => uint64) private birthtime;
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
        uint256 memory tokenId = 0;
        uint256 memory i;
        for (i = 16; i >= 1; i--) {
            tokenId = (tokenId << 16) + seeds[i - 1];
        }
        addSerial(tokenId);
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        existingURIs[uri] = true;
        pass = tokenId;
        birthtime[tokenId] = block.timestamp;
        lifespan[tokenId] = lifespan;
        return tokenId;
    }

    function safeBurn(uint16[] memory seeds) public {
        uint256 tokenId = 0;
        for (uint256 i = seeds.length; i >= 1; i--) {
            tokenId = (tokenId << 16) + seeds[i - 1];
        }
        _safeBurn(tokenId);
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

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        uint64 memory current = block.timestamp;
        if ((current - birthtime[tokenId]) / (3600 * 24) < lifespan[tokenId]) {
            return super.tokenURI(tokenId);
        } else {
            birthtime[tokenId] = 0;
            lifespan[tokenId] = 0;
            usedSerials[tokenId] = false;
            serialBrandMap[tokenId] = address(0);
            _burn(tokenId);
        }
    }
}
