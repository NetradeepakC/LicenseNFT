// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Translator {
    uint256 internal pass;

    function getUINT256() public view returns (uint256) {
        return pass;
    }
}
