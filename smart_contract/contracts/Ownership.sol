// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Whitelist is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _SerialIds;

    mapping(address => bool) private usedBrandIDs;
    mapping(uint256 => bool) private usedSerials;
    mapping(uint256 => address) private serialBrandMap;

    constructor() {
        usedBrandIDs[msg.sender] = true;
    }

    modifier onlyMember(uint256 serial) {
        require(
            serialBrandMap[serial] == msg.sender,
            "Function accessible only by the member of the brand!!"
        );
        _;
    }

    modifier onlyRegistered() {
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

    function addMember(address _member) public onlyOwner {
        usedBrandIDs[_member] = true;
    }
}
