// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Misc {
    function combine(uint16[] memory arr) internal pure returns (uint256) {
        uint256 out;
        for (uint256 i = 16; i >= 1; i--) {
            out = (out << 16) + arr[i - 1];
        }
        return out;
    }

    function uintToString(uint256 v) internal pure returns (string memory) {
        bytes memory reversed = new bytes(100);
        uint256 i;
        for (i = 0; v > 0; i++) {
            reversed[i] = bytes1(uint8(48 + (v % 10)));
            v /= 10;
        }
        bytes memory str = new bytes(reversed.length);
        for (uint256 j = 0; j < reversed.length; j++) {
            str[j] = reversed[reversed.length - j - 1];
        }
        return string(str);
    }

    function concatenate(string memory a, string memory b)
        internal
        pure
        returns (string memory)
    {
        return string(abi.encodePacked(a, " ", b));
    }
}
