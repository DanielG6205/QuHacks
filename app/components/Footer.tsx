"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Santa likes kids</h2>
            <p className="text-sm text-gray-200 mt-2">
              Building a brighter future for kids
            </p>
          </div>
          <div className="flex gap-8 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/team" className="hover:underline">
              Team
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
