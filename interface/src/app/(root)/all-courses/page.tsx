"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

const courses = [
  {
    id: "1",
    title: "Solidity Basics",
    description: "Learn the fundamentals of Solidity and smart contract development.",
    image: "/images/Solidity.png",
    enrolled: true,
    duration: "6 hours",
    author: "John Doe",
  },
  {
    id: "2",
    title: "Mastering Solana",
    description: "Deep dive into Solana development and Rust programming.",
    image: "/images/Solidity.png",
    enrolled: false,
    duration: "8 hours",
    author: "Jane Smith",
  },
  {
    id: "3",
    title: "Aptos Smart Contracts",
    description: "Explore Move language and Aptos blockchain.",
    image: "/images/Solidity.png",
    enrolled: true,
    duration: "10 hours",
    author: "Alice Johnson",
  },
  {
    id: "4",
    title: "Solidity Intermediate",
    description: "Learn how to make of smart contract in soldity along with projects development.",
    image: "/images/Solidity.png",
    enrolled: true,
    duration: "8 hours",
    author: "Kanishk Kumar",
  },
];

export default function AllCourses() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "all" || course.title.toLowerCase().includes(filter))
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
        {filteredCourses.map((course) => (
          <Card key={course.id} className="bg-transparent border-gray-700 p-4 flex items-center min-h-52">
            <div className="w-1/3 relative">
              <Image
                src={course.image}
                alt={course.title}
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
            <div className="w-2/3 pl-4">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-gray-400 text-sm mb-2">{course.description}</p>
              <p className="text-gray-400 text-sm">Duration: {course.duration}</p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm font-bold">Author: <span className="text-purple-500">{course.author}</span></p>
                <Button className="bg-white text-black hover:bg-gray-300 font-saira border-purple-500 border-2">
                  {course.enrolled ? "Continue Journey" : "Start Your Journey"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}