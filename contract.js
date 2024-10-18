import { ethers } from "ethers";
import Voting from "./contracts/Voting.json"; // Add your compiled contract

const contractAddress = "YOUR_CONTRACT_ADDRESS";

export const createPoll = async (title, options) => {
    const { ethereum } = window;
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, Voting.abi, signer);

        const tx = await contract.createPoll(title, options);
        await tx.wait();
    }
};

export const vote = async (pollId, optionId) => {
    const { ethereum } = window;
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, Voting.abi, signer);

        const tx = await contract.vote(pollId, optionId);
        await tx.wait();
    }
};

export const getVotes = async (pollId, optionId) => {
    const { ethereum } = window;
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const contract = new ethers.Contract(contractAddress, Voting.abi, provider);

        const votes = await contract.getVotes(pollId, optionId);
        return votes.toString();
    }
};
