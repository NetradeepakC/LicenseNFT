// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Misc.sol";

contract Whitelist is Ownable, Misc {
    using Counters for Counters.Counter;
    Counters.Counter private _SerialIds;

    mapping(address => bool) private usedBrandIDs;
    mapping(uint256 => bool) private usedSerials;
    mapping(uint256 => address) private serialBrandMap;
    mapping(address => bool) private creator;

    constructor() {
        usedBrandIDs[msg.sender] = true;
        creator[msg.sender] = true;
    }

    modifier onlyCreator() {
        require(
            creator[msg.sender],
            "Function accessible only by the member of the brand!!"
        );
        _;
    }

    modifier onlyMember(uint256 serial) {
        require(
            serialBrandMap[serial] == msg.sender,
            "Function accessible only by the member of the brand!!"
        );
        _;
    }

    modifier onlyRegistered() {
        require(usedBrandIDs[msg.sender], "Only registered members allowed");
        _;
    }

    function addSerial(uint256 serial) public onlyRegistered {
        require(
            !usedSerials[serial],
            concatenate(
                concatenate("Serial ", uintToString(serial)),
                " already in use"
            )
        );
        usedSerials[serial] = true;
        serialBrandMap[serial] = msg.sender;
    }

    function addMember(address _member) public onlyCreator {
        require(!usedBrandIDs[_member], "Address already registered");
        usedBrandIDs[_member] = true;
    }
}
