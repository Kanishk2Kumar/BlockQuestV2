// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// To DO:
// Create a users & courses struct
// Create functions for creating new users, fetching users details, adding enrolled course,adding Completed course 
// Create functions for fetching course details, adding enrolled users ,adding Completed users 
contract BlockQuest {
    struct User {
        address userAddress;
        string username;
        uint16 streak;
        uint256 EXP;
        address[] userCourses;
        address[] completedCourses;
    }

    struct Course {
        string courseName;
        uint16 durationInHours;
        string difficulty;
        string authorName;
        string readmeLink;
        address[] enrolledUsers;
        address[] completedUsers;
    }

    mapping(address => User) public users;
    mapping(address => Course) public courses;
    address[] public courseList;
    
    // Create a new user
    function createUser(string memory _username) public {
        require(users[msg.sender].userAddress == address(0), "User already exists");
        users[msg.sender] = User(msg.sender, _username, 0, 0, new address[](0), new address[](0) );
    }

    // Fetch user details
    function getUser(address _userAddress) public view returns (User memory) {
        require(users[_userAddress].userAddress != address(0), "User does not exist");
        return users[_userAddress];
    }

    // Create a new course
    function createCourse(
        address _courseAddress,
        string memory _courseName,
        uint16 _durationInHours,
        string memory _difficulty,
        string memory _authorName,
        string memory _readmeLink
    ) public {
        require(courses[_courseAddress].durationInHours == 0, "Course already exists");
        courses[_courseAddress] = Course(_courseName, _durationInHours, _difficulty, _authorName, _readmeLink, new address[](0), new address[](0) );
        courseList.push(_courseAddress);
    }

    // Fetch course details
    function getCourse(address _courseAddress) public view returns (Course memory) {
        require(courses[_courseAddress].durationInHours != 0, "Course does not exist");
        return courses[_courseAddress];
    }

    // Enroll user in a course
    function enrollCourse(address _courseAddress) public {
        require(users[msg.sender].userAddress != address(0), "User does not exist");
        require(courses[_courseAddress].durationInHours != 0, "Course does not exist");
        users[msg.sender].userCourses.push(_courseAddress);
        courses[_courseAddress].enrolledUsers.push(msg.sender);
    }

    // Mark course as completed
    function completeCourse(address _courseAddress) public {
        require(users[msg.sender].userAddress != address(0), "User does not exist");
        require(courses[_courseAddress].durationInHours != 0, "Course does not exist");
        users[msg.sender].completedCourses.push(_courseAddress);
        courses[_courseAddress].completedUsers.push(msg.sender);
    }
     // Fetch user enrolled courses
    function getUserCourses(address _userAddress) public view returns (Course[] memory) {
        require(users[_userAddress].userAddress != address(0), "User does not exist");

        address[] memory enrolledCourseAddresses = users[_userAddress].userCourses;
        Course[] memory enrolledCourses = new Course[](enrolledCourseAddresses.length);
        
        for (uint i = 0; i < enrolledCourseAddresses.length; i++) {
            enrolledCourses[i] = courses[enrolledCourseAddresses[i]];
        }
        return enrolledCourses;
    }
    // Fetch all courses
    function getAllCourses() public view returns (Course[] memory) {
        Course[] memory allCourses = new Course[](courseList.length);
        for (uint i = 0; i < courseList.length; i++) {
            allCourses[i] = courses[courseList[i]];
        }
        return allCourses;
    }
}