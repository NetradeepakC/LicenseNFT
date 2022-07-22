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
    mapping(address => user) internal addressUserMap;
    mapping(uint256 => product) internal serialProductMap;

    address[] null_add_arr = new address[](0);
    product null_product =
        product("", address(0), null_add_arr, uint64(0), uint24(0));

    struct user {
        string name;
        uint256[] boughtList;
        uint256[] soldList;
        bool isSellar;
    }

    struct product {
        string name;
        address sellar;
        address[] ownerList;
        uint64 birthtime;
        uint24 lifespan;
    }

    constructor() {
        usedSerials[0] = true;
    }

    modifier onlySellar(address add) {
        require(addressUserMap[add].isSellar, "Only sellars can access this");
        _;
    }

    modifier onlyMember(uint256 serial) {
        require(
            serialProductMap[serial].sellar == msg.sender,
            "Function accessible only by the member of the brand!!"
        );
        _;
    }

    modifier onlyRegistered() {
        require(usedBrandIDs[msg.sender], "Only registered members allowed");
        _;
    }

    function addSerial(uint256 serial) public onlySellar(msg.sender) {
        require(
            !usedSerials[serial],
            concatenate(
                concatenate("Serial ", uintToString(serial)),
                " already in use"
            )
        );
        usedSerials[serial] = true;
    }

    function addUser(
        string memory name,
        address _member,
        bool isSellar
    ) public {
        require(!usedBrandIDs[_member], "Address already registered");
        usedBrandIDs[_member] = true;
        uint256[] memory temp1 = new uint256[](0);
        uint256[] memory temp2 = new uint256[](0);
        addressUserMap[_member] = user(name, temp1, temp2, isSellar);
    }

    function getBoughtLicenses() public view returns (uint256[] memory) {
        return addressUserMap[msg.sender].boughtList;
    }

    function getIssuedLicense()
        public
        view
        onlySellar(msg.sender)
        returns (uint256[] memory)
    {
        return addressUserMap[msg.sender].soldList;
    }

    function makeSellar() public {
        addressUserMap[msg.sender].isSellar = true;
    }

    function kickSellar() public {
        require(
            addressUserMap[msg.sender].soldList.length == 0,
            "All licenses need to expire before leaving the business"
        );
        addressUserMap[msg.sender].isSellar = false;
    }

    function isRegistered() public view onlyRegistered {}
}
