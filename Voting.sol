// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Poll {
        string title;
        string[] options;
        mapping(uint256 => uint256) votes;
        bool exists;
    }

    mapping(uint256 => Poll) public polls;
    uint256 public pollsCount;

    function createPoll(string memory title, string[] memory options) public {
        pollsCount++;
        Poll storage newPoll = polls[pollsCount];
        newPoll.title = title;
        newPoll.options = options;
        newPoll.exists = true;
    }

    function vote(uint256 pollId, uint256 optionId) public {
        require(polls[pollId].exists, "Poll does not exist");
        require(optionId < polls[pollId].options.length, "Invalid option");
        polls[pollId].votes[optionId]++;
    }

    function getVotes(uint256 pollId, uint256 optionId) public view returns (uint256) {
        require(polls[pollId].exists, "Poll does not exist");
        return polls[pollId].votes[optionId];
    }
}
