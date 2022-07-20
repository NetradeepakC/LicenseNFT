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
        uint256 tokenId = combine(seeds);
        addSerial(tokenId, to);
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        existingURIs[uri] = true;
        pass = tokenId;
        lifespan[tokenId] = day;
        birthtime[tokenId] = uint64(block.timestamp);
        return tokenId;
    }

    function safeBurn(uint16[] memory parts) internal {
        _safeBurn(combine(parts));
    }

    function _safeBurn(uint256 tokenId) internal {
        birthtime[tokenId] = 0;
        lifespan[tokenId] = 0;
        usedSerials[tokenId] = false;
        address temp = serialBrandMap[tokenId];
        for (uint256 i = 0; i < brandSerialMap[temp].length; i++) {
            if (brandSerialMap[temp][i] == tokenId) {
                brandSerialMap[temp][i] = brandSerialMap[temp][
                    brandSerialMap[temp].length - 1
                ];
                brandSerialMap[temp].pop();
                break;
            }
        }
        serialBrandMap[tokenId] = address(0);
        temp = serialUserMap[tokenId];
        for (uint256 i = 0; i < userSerialMap[temp].length; i++) {
            if (userSerialMap[temp][i] == tokenId) {
                userSerialMap[temp][i] = userSerialMap[temp][
                    userSerialMap[temp].length - 1
                ];
                userSerialMap[temp].pop();
                break;
            }
        }
        serialUserMap[tokenId] = address(0);
        _burn(tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function getTokenURI(uint16[] memory parts) public returns (string memory) {
        uint256 tokenId = combine(parts);
        return tokenURI(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        require(
            msg.sender == serialBrandMap[tokenId] ||
                msg.sender == serialUserMap[tokenId],
            "Only the owner of this address can see it's details"
        );
        uint64 current = uint64(block.timestamp);
        if ((current - birthtime[tokenId]) < lifespan[tokenId]) {
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
            for (i = 0; i < userSerialMap[from].length; i++) {
                if (userSerialMap[from][i] == serial) {
                    userSerialMap[from][i] = userSerialMap[from][
                        userSerialMap[from].length - 1
                    ];
                    userSerialMap[from].pop();
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
            userSerialMap[to].push(serial);
            serialUserMap[serial] = to;
        }
    }
}
