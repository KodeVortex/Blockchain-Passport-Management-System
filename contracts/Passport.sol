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
    }

    mapping(address => Person) public user;
    
    constructor() {
    ADMIN = msg.sender;
    }

    function createPassport(
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
        user[msg.sender] = Person(
            _firstName,
            _lastName,
            _gender,
            _age,
            _nationality,
            Year(_bday, _bmonth, _byear),
            _country
        );
    }

    function userViewPassport() public view returns (Person memory) {
        return user[msg.sender];
    }
    
    function adminViewPassport(address userId) public view returns (Person memory) {
        require(msg.sender == ADMIN,"Action can only be performed by concerned officials");
        return user[userId];
         }

    function updatePassport(
        string memory _firstName,
        string memory _lastName,
        string memory _gender
    ) public {
        user[msg.sender].firstName = _firstName;
        user[msg.sender].lastName = _lastName;
        user[msg.sender].gender = _gender;
    }
}