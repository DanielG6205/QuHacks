import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthButton from "./AuthButton";
import './Navbar.css'; 

const Navbar: React.FC = () => {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <Link href="/" className="navbar-logo">
          <Image 
            src="/santa.png" 
            alt="logo" 
            className="navbar-logo-img" 
            width={100}  
            height={100} 
          />
        </Link>

        <div className="navbar-links">
          <Link href="/about" className="navbar-link">About</Link>
          <Link href="/use" className="navbar-link">Use</Link>
          <Link href="/team" className="navbar-link">Team</Link>
        </div>

        <AuthButton />
      </nav>
    </header>
  );
};

export default Navbar;



