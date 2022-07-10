// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract Whitelist is Ownable {
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
        console.log(msg.sender);
        console.log(usedBrandIDs[msg.sender]);
        require(usedBrandIDs[msg.sender], "Unrecognised member");
        _;
    }

    function addSerial() public onlyRegistered returns (uint256) {
        uint256 serial = _SerialIds.current();
        _SerialIds.increment();
        usedSerials[serial] = true;
        serialBrandMap[serial] = msg.sender;
        return serial;
    }

    function addMember(address _member) public onlyCreator {
        require(!usedBrandIDs[msg.sender], "Address already registered");
        usedBrandIDs[_member] = true;
    }
}
