// SPDX-License-Identifier: MIT
pragma solidity <=0.8.9;

import "hardhat/console.sol";
contract Passport {
    address ADMIN = msg.sender;

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
        //bool verified;
    }
    //Person[] public persons;
    mapping(address => Person) public user;

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
        //persons.push(Person(msg.sender,_name,_nationality,_age));

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

    function viewPassport() public view returns (Person memory) {
        return user[msg.sender];
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
