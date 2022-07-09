// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./LicenseERC721.sol";

contract SoulBoundLicense is LicenseERC721 {
    constructor() ERC721("SoulBoundLicense", "SoulBoundLicense") {}

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 serial
    ) internal virtual override {
        require(
            from == address(0) || to == address(0),
            "Soulbound tokens can't be tranfered."
        );
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 serial
    ) internal virtual override {
        require(
            from == address(0) || to == address(0),
            "Soulbound tokens can't be tranfered."
        );
    }
}
