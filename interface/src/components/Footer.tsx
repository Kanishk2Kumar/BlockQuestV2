import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component from Next.js
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'; // or any other icon library

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <Link href="/">
              {/* Replace with your logo image */}
              <Image
                src="/logo.png" // Path to your logo image in the public folder
                alt="Your Logo"
                width={150} // Set the desired width
                height={50} // Set the desired height
                className="object-contain" // Ensures the image scales properly
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/all-courses" className="hover:text-cyan-400 transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/AI-Teacher" className="hover:text-cyan-400 transition-colors">
                  AI Teacher
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 py-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;