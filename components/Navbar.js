"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div>
               <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo w-24">
          <Image src="/logo.png" alt="Beauty Training Courses Logo" width={50} height={50} />
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/about-us" className="text-gray-700 hover:text-gray-900">About Us</Link>
          <Link href="/faqs" className="text-gray-700 hover:text-gray-900">FAQs</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
        </nav>
        <div className="flex items-center">
          <button className="border rounded-full px-4 py-1 text-sm flex items-center">
            Sign in / Signup <span className="ml-1">▼</span>
          </button>
          <div className="border-gray-700 border-2 ml-4 w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
  <Image src="/user.png" alt="User" width={32} height={32} />
</div>

        </div>
      </header>
        </div>
    );
}

export default Navbar;
