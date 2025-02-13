"use client";
import { useState, FormEvent, useContext } from "react";
import { Web3Context } from "@/contexts/Web3Context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ethers } from "ethers";
import BlockQuest from "../../../ABI/BlockQuest.json";

const CONTRACT_ADDRESS = "0x29708D6dA847C924dDB3e7441a3799C25264286F";

const AddCourse = () => {
  const { signer, connectWallet, isLoading } = useContext(Web3Context);
  const [formData, setFormData] = useState({
    courseAddress: "",
    courseName: "",
    durationInHours: "",
    difficulty: "",
    authorName: "",
    readmeLink: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!signer) {
      alert("Wallet Not Connected. Please connect your wallet.");
      connectWallet();
      return;
    }

    // Validate form data
    if (
      !formData.courseAddress ||
      !formData.courseName ||
      !formData.durationInHours ||
      !formData.difficulty ||
      !formData.authorName ||
      !formData.readmeLink
    ) {
      alert("Please fill out all fields.");
      return;
    }

    // Validate duration is a positive number
    if (isNaN(parseInt(formData.durationInHours)) || parseInt(formData.durationInHours) <= 0) {
      alert("Duration must be a positive number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const contract = new ethers.Contract(CONTRACT_ADDRESS, BlockQuest.abi, signer);

      // Estimate gas limit
      const gasLimit = await contract.createCourse.estimateGas(
        formData.courseAddress,
        formData.courseName,
        parseInt(formData.durationInHours),
        formData.difficulty,
        formData.authorName,
        formData.readmeLink
      );

      // Send transaction with estimated gas limit
      const tx = await contract.createCourse(
        formData.courseAddress,
        formData.courseName,
        parseInt(formData.durationInHours),
        formData.difficulty,
        formData.authorName,
        formData.readmeLink,
        { gasLimit: gasLimit.toString() } // Use estimated gas limit
      );

      console.log("Transaction sent:", tx);
      await tx.wait();
      alert("Course added successfully!");

      // Clear form
      setFormData({
        courseAddress: "",
        courseName: "",
        durationInHours: "",
        difficulty: "",
        authorName: "",
        readmeLink: "",
      });
    } catch (error) {
      console.error("Error while adding course:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-black p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-white">Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="courseAddress" className="text-white">Course Address</Label>
          <Input type="text" name="courseAddress" value={formData.courseAddress} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="courseName" className="text-white">Course Name</Label>
          <Input type="text" name="courseName" value={formData.courseName} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="durationInHours" className="text-white">Duration (Hours)</Label>
          <Input type="number" name="durationInHours" value={formData.durationInHours} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="difficulty" className="text-white">Difficulty</Label>
          <Input type="text" name="difficulty" value={formData.difficulty} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="authorName" className="text-white">Author Name</Label>
          <Input type="text" name="authorName" value={formData.authorName} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="readmeLink" className="text-white">Readme Link</Label>
          <Input type="text" name="readmeLink" value={formData.readmeLink} onChange={handleChange} required />
        </div>
        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600" disabled={isSubmitting || isLoading}>
          {isSubmitting ? "Adding Course..." : "Add Course"}
        </Button>
      </form>
    </div>
  );
};

export default AddCourse;