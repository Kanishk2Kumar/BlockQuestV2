"use client";
import React, { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import BlockQuest from "../ABI/BlockQuest.json";

export const Web3Context = createContext();

const CONTRACT_ADDRESS = "0x29708D6dA847C924dDB3e7441a3799C25264286F";

export const Web3Provider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        setIsLoading(true);
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length === 0) {
          throw new Error("No accounts found. Please ensure MetaMask is connected.");
        }

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        setAccount(address);
        setProvider(provider);
        setSigner(signer);

        const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, BlockQuest.abi, signer);
        setContract(contractInstance);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
        alert(`Error: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Please install MetaMask to use this application");
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setContract(null);
    setProvider(null);
    setSigner(null);
  };

  const enrollCourse = async (courseAddress) => {
    if (!contract || !account) {
      alert("Connect wallet to enroll in a course.");
      return;
    }
    try {
      const tx = await contract.enrollCourse(courseAddress);
      await tx.wait();
      alert("Enrollment successful!");
    } catch (error) {
      console.error("Error enrolling in course:", error);
      alert("Failed to enroll. Please try again.");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          connectWallet();
        } else {
          disconnectWallet();
        }
      });
    }
  }, []);

  return (
    <Web3Context.Provider value={{ account, contract, provider, signer, isLoading, connectWallet, disconnectWallet, enrollCourse }}>
      {children}
    </Web3Context.Provider>
  );
};
