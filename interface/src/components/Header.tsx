"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useContext } from "react";
import { Button } from "./ui/button";
import { Web3Context } from "@/contexts/Web3Context";
import clsx from "clsx"; // Ensure you have this installed: `npm install clsx`

const Header = () => {
  const { account, connectWallet, disconnectWallet } = useContext(Web3Context);
  const pathname = usePathname();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (pathname === "/") {
      audioRef.current = new Audio("/audio/bgAud1.mp3");
      audioRef.current.loop = true;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsAudioPlaying(false);
        setIsIndicatorActive(false);
      }
    };
  }, [pathname]);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div>
      <header className="flex justify-between gap-5 font-saira">
        <Link href="/">
          <Image src="/Logo.png" alt="logo" width={90} height={90} />
        </Link>
        <ul className="flex flex-row items-center gap-5 mt-3">
          <li>
            <Link
              href="/all-courses"
              className={`text-base cursor-pointer capitalize ${
                pathname === "/all-courses" ? "text-purple-600" : "text-gray-400"
              }`}
            >
              All Courses
            </Link>
          </li>
          <li>
            <Link
              href="/AI-Teacher"
              className={`text-base cursor-pointer capitalize ${
                pathname === "/AI-Teacher" ? "text-purple-600" : "text-gray-400"
              }`}
            >
              AI Teacher
            </Link>
          </li>
          <li>
            <Link
              href="/PvP"
              className={`text-base cursor-pointer capitalize ${
                pathname === "/PvP" ? "text-purple-600" : "text-gray-400"
              }`}
            >
              PvP
            </Link>
          </li>
          {pathname === "/" && (
            <li>
              <button
                onClick={toggleAudioIndicator}
                className="flex items-center space-x-0.5"
              >
                <audio ref={audioRef} className="hidden" src="/audio/loop.mp3" loop />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={clsx("indicator-line bg-blue-50 p-[2px] transition-all duration-300", {
                      "animate-pulse": isIndicatorActive,
                    })}
                    style={{
                      animationDelay: `${bar * 0.1}s`,
                    }}
                  />
                ))}
              </button>
            </li>
          )}
          <li>
            {account ? (
              <Button onClick={disconnectWallet} variant="outline">
                {`${account.slice(0, 6)}...${account.slice(-4)}`}
              </Button>
            ) : (
              <Button onClick={connectWallet}>Connect Wallet</Button>
            )}
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
