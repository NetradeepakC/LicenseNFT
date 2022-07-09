// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./LicenseERC721.sol";

contract SoulBoundLicense is LicenseERC721 {
    constructor() {}

    event Attest(address indexed to, uint256 indexed tokenId);

    event Revoke(address indexed to, uint256 indexed tokenId);

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
        if (from == address(0)) {
            emit Attest(to, serial);
        } else if (to == address(0)) {
            emit Revoke(to, serial);
        }
    }
}
