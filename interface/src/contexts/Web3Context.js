"use client"
// src/contexts/Web3Context.js
import React, { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import MetacircleABI from "../ABI/BlockQuest.json";
export const Web3Context = createContext();

// Initialize contract (replace with your contract address and ABI)
// Initialize contract (replace with your contract address and ABI)
const CONTRACT_ADDRESS = "0x29708D6dA847C924dDB3e7441a3799C25264286F";
const contractABI = MetacircleABI.abi;
export const Web3Provider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request accounts, which will trigger MetaMask popup
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        
        if (accounts.length === 0) return; // If no account is selected, return
        
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress(); // Explicitly fetch the address
  
        setAccount(address);
        setProvider(provider);
  
        const socialMediaContract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
        setContract(socialMediaContract);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("Please install MetaMask to use this application");
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setContract(null);
    setProvider(null);
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          disconnectWallet();
        }
      });
    }
  }, []);

  return (
    <Web3Context.Provider
      value={{ account, contract, provider, connectWallet, disconnectWallet }}
    >
      {children}
    </Web3Context.Provider>
  );
};
