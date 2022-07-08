// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Whitelist is Ownable {
    mapping(address => bool) members;

    constructor() {
        members[msg.sender] = true;
    }

    modifier onlyMember() {
        require(
            members[msg.sender],
            "Function accessible only by the owner !!"
        );
        _;
    }

    function addMember(address _member) public onlyOwner {
        members[_member] = true;
    }
}
