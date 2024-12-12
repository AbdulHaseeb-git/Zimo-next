
"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Header from '../components/header/Header';

export default function About() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <>
      <Header />
      <div
        className={`min-h-screen min-w-screen flex flex-col items-center justify-center gap-14 ${
          theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white'
        }`}
      >
        {/* Welcome Message */}
        <h1
          className={`text-center text-4xl font-bold mb-4 ${
            theme === 'light' ? 'text-green-600' : 'text-green-400'
          }`}
        >
          Get to know About me!
        </h1>
        <p
          className={`text-lg mb-4 ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}
        >
          Explore the different pages of this simple Next.js application to know me.
        </p>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link
            href="/contact"
            className={`py-2 px-4 rounded ${
              theme === 'light'
                ? 'bg-green-500 text-gray-100 hover:bg-green-400'
                : 'bg-green-500 text-gray-900 hover:bg-green-400'
            }`}
          >
            Contact
          </Link>
          <Link
            href="/posts"
            className={`py-2 px-4 rounded ${
              theme === 'light'
                ? 'bg-green-500 text-gray-100 hover:bg-green-400'
                : 'bg-green-500 text-gray-900 hover:bg-green-400'
            }`}
          >
            Posts
          </Link>
          <Link
            href="/"
            className={`py-2 px-4 rounded ${
              theme === 'light'
                ? 'bg-green-500 text-gray-100 hover:bg-green-400'
                : 'bg-green-500 text-gray-900 hover:bg-green-400'
            }`}
          >
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
