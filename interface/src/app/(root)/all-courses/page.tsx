"use client";

import { useState, useEffect, useContext } from "react";
import { Web3Context } from "@/contexts/Web3Context";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

interface Course {
  courseName: string;
  durationInHours: number;
  difficulty: string;
  authorName: string;
  readmeLink: string;
}

export default function AllCourses() {
  const { contract } = useContext(Web3Context);
  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchCourses = async () => {
      if (!contract) return;
      try {
        const coursesData: Course[] = await contract.getAllCourses();
        setCourses(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [contract]);

  const filteredCourses = courses.filter(
    (course) =>
      course.courseName.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "all" || course.courseName.toLowerCase().includes(filter))
  );

  return (
    <div className="bg-black min-h-screen text-white px-24 py-2">
      <h1 className="text-4xl font-bold mb-4 text-center font-quantico underline decoration-dashed decoration-purple-500">
        All Courses
      </h1>
      <div className="flex gap-4 my-6">
        <Input
          placeholder="Search Courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-gray-500 text-white min-w-[130vh]"
        />
        <Select onValueChange={setFilter}>
          <SelectTrigger className="border-gray-400 text-white">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="border-gray-700 text-white">
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="solidity">Solidity</SelectItem>
            <SelectItem value="solana">Solana</SelectItem>
            <SelectItem value="aptos">Aptos</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map((course, index) => (
          <Card key={index} className="bg-transparent border-gray-700 p-4 flex items-center min-h-52">
            <div className="w-1/3 relative">
              <Image
                src="/images/Solidity.png"
                alt={course.courseName}
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
            <div className="w-2/3 pl-4">
              <h2 className="text-xl font-semibold">{course.courseName}</h2>
              <p className="text-gray-400 text-sm mb-2">{course.readmeLink}</p>
              <p className="text-gray-400 text-sm">Duration: {course.durationInHours} hours</p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm font-bold">Author: <span className="text-purple-500">{course.authorName}</span></p>
                <Button className="bg-white text-black hover:bg-gray-300 font-saira border-purple-500 border-2">
                  Start Your Journey
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
