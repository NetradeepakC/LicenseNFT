// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Misc.sol";

contract Whitelist is Ownable, Misc {
    using Counters for Counters.Counter;
    Counters.Counter private _SerialIds;

    mapping(address => bool) private usedBrandIDs;
    mapping(uint256 => bool) internal usedSerials;
    mapping(uint256 => address) internal serialBrandMap;
    mapping(uint256 => address) internal serialUserMap;
    mapping(address => bool) private creator;
    mapping(address => uint256[]) internal userSerialMap;
    mapping(address => uint256[]) internal brandSerialMap;

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

    modifier senderIsHolder(address _add) {
        require(
            msg.sender == _add,
            "Only the owner of this address can see it's details"
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

    function addSerial(uint256 serial, address to) public onlyRegistered {
        require(
            !usedSerials[serial],
            concatenate(
                concatenate("Serial ", uintToString(serial)),
                " already in use"
            )
        );
        usedSerials[serial] = true;
        serialBrandMap[serial] = msg.sender;
        brandSerialMap[msg.sender].push(serial);
        userSerialMap[to].push(serial);
        serialUserMap[serial] = to;
    }

    function addMember(address _member) public onlyCreator {
        require(!usedBrandIDs[_member], "Address already registered");
        usedBrandIDs[_member] = true;
    }

    function getBoughtLicenses(address _user)
        public
        senderIsHolder(_user)
        returns (uint256[] memory)
    {
        return userSerialMap[_user];
    }

    function getIssuedLicense(address _user)
        public
        senderIsHolder(_user)
        returns (uint256[] memory)
    {
        return brandSerialMap[_user];
    }
}
