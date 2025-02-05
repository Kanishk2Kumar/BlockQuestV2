"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

const Header = () => {
  const pathname = usePathname(); // Get current route

  return (
    <div>
      <header className="my-2 flex justify-between gap-5">
        <Link href="/">
          <Image src="/Logo.png" alt="logo" width={160} height={60} />
        </Link>
        <ul className="flex flex-row items-center gap-4 mt-3">
          <li className="relative group">
            <Link
              href="/all-courses"
              className={`text-base cursor-pointer capitalize ${
                pathname === "/all-courses" ? "text-purple-600" : "text-gray-400"
              }`}
            >
              All Courses
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/AI-Teacher"
              className={`text-base cursor-pointer capitalize ${
                pathname === "/AI-Teacher" ? "text-purple-600" : "text-gray-400"
              }`}
            >
              AI Teacher
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/PvP"
              className={`text-base cursor-pointer capitalize ${
                pathname === "/PvP" ? "text-purple-600" : "text-gray-400"
              }`}
            >
              PvP
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
          <li>
            <Button>Connect Wallet</Button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
