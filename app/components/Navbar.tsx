"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthButton from "./AuthButton";

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-teal-400 shadow-sm font-work-sans">
      <nav className="flex items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={50} height={5} />
        </Link>

        <div className="flex-1 flex justify-center items-center gap-44 text-lg">
          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/use" className="text-white hover:text-gray-200">
            Use
          </Link>
          <Link href="/team" className="text-white hover:text-gray-200">
            Team
          </Link>
          
        </div>

        <AuthButton />
      </nav>
    </header>
  );
};

export default Navbar;
