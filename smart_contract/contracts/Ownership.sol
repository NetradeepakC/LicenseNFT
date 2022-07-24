// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Misc.sol";

contract Whitelist is Misc {
    mapping(address => bool) internal usedBrandIDs;
    mapping(uint256 => bool) internal usedSerials;
    mapping(address => user) internal addressUserMap;
    mapping(uint256 => product) internal serialProductMap;
    mapping(uint256 => address[]) internal serialOwnerListMap;
    mapping(address => uint256[]) internal addressBoughtListMap;
    mapping(address => uint256[]) internal addressSoldListMap;

    // product null_product =
    //     product(
    //         "",
    //         0,
    //         address(0),
    //         uint64(0),
    //         uint64(0),
    //         false,
    //         ProductType.SmartHome
    //     );

    enum ProductType {
        SmartHome,
        MobileDevice,
        Computer,
        Appliance,
        Clothing,
        Car
    }

    struct user {
        string name;
        bool isSellar;
    }

    struct product {
        string name;
        uint256 serialID;
        address sellar;
        uint64 birthtime;
        uint64 lifespan;
        bool onSale;
        ProductType pType;
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

    modifier onlyCurrentOwner(uint16[] memory parts) {
        uint256 serial = combine(parts);
        require(
            serialOwnerListMap[serial][serialOwnerListMap[serial].length - 1] ==
                msg.sender,
            " Only the owner of this product can access this"
        );
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
        addressUserMap[_member] = user(name, isSellar);
    }

    function getName() public view onlyRegistered returns (string memory) {
        return addressUserMap[msg.sender].name;
    }

    function getProduct(uint16[] memory parts)
        public
        view
        returns (product memory)
    {
        return serialProductMap[combine(parts)];
    }

    function getBoughtLicenses() public view returns (uint256[] memory) {
        return addressBoughtListMap[msg.sender];
    }

    function getIssuedLicense()
        public
        view
        onlySellar(msg.sender)
        returns (uint256[] memory)
    {
        return addressSoldListMap[msg.sender];
    }

    function makeSellar() public {
        addressUserMap[msg.sender].isSellar = true;
    }

    function kickSellar() public {
        require(
            addressSoldListMap[msg.sender].length == 0,
            "All licenses need to expire before leaving the business"
        );
        addressUserMap[msg.sender].isSellar = false;
    }

    function getOwnerList(uint16[] memory parts)
        public
        view
        returns (address[] memory)
    {
        uint256 serial = combine(parts);
        require(
            serialProductMap[serial].onSale ||
                serialProductMap[serial].sellar == msg.sender,
            "Function accessible only by the member of the brand!!"
        );
        return serialOwnerListMap[serial];
    }

    function setOnSale(uint16[] memory parts) public onlyCurrentOwner(parts) {
        serialProductMap[combine(parts)].onSale = true;
    }

    function takeDownFromSale(uint16[] memory parts)
        public
        onlyCurrentOwner(parts)
    {
        serialProductMap[combine(parts)].onSale = false;
    }

    function getCurrentOwner(uint16[] memory parts)
        public
        view
        returns (address)
    {
        uint256 serial = combine(parts);
        require(
            serialProductMap[serial].onSale ||
                serialProductMap[serial].sellar == msg.sender,
            "Product must be on sale to access this"
        );
        return
            serialOwnerListMap[serial][serialOwnerListMap[serial].length - 1];
    }

    function isRegistered() public view onlyRegistered {}
}
