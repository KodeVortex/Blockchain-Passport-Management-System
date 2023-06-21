// SPDX-License-Identifier: MIT
pragma solidity <=0.8.9;

contract Passport {
    address public ADMIN;

    struct Year {
        uint day;
        uint month;
        uint year;
    }

    struct Person {
        string firstName;
        string lastName;
        string gender;
        uint age;
        string nationality;
        Year dob;
        string country;
        bool isVerified;
        bool isBlacklisted;
    }

    mapping(address => Person) public user;
    
    constructor() {
    ADMIN = msg.sender;
    }

    function createPassport(
        address userId,
        string memory _firstName,
        string memory _lastName,
        string memory _gender,
        uint _age,
        string memory _nationality,
        uint _byear,
        uint _bmonth,
        uint _bday,
        string memory _country
    ) public {
        require(msg.sender == ADMIN,"Only admins can create passport");
        user[userId] = Person(
            _firstName,
            _lastName,
            _gender,
            _age,
            _nationality,
            Year(_bday, _bmonth, _byear),
            _country,
            false,
            false
        );
    }

    function userViewPassport() public view returns (Person memory) {
        return user[msg.sender];
    }
    
    function adminViewPassport(address userId) public view returns (Person memory) {
        require(msg.sender == ADMIN,"Action can only be performed by concerned officials");
        return user[userId];
         }

    function verifyPassport(address userId) public{
        require(msg.sender == ADMIN,"Will be verifid by concerned officials");
        user[userId].isVerified = true;
    }

       function blacklistPassport(address userId) public{
        require(msg.sender == ADMIN,"Can only be blacklisted by concerned officials");
        user[userId].isBlacklisted = true;
    }

    function updatePassport(
        address userId,
        string memory _firstName,
        string memory _lastName,
        string memory _gender
    ) public {
        require(msg.sender == ADMIN,"Only Admins can make changes");
        user[userId].firstName = _firstName;
        user[userId].lastName = _lastName;
        user[userId].gender = _gender;
    }
}