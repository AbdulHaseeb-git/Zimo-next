"use client";
import {useSelector } from 'react-redux';
import Link from 'next/link';
import Header from '../components/header/Header';
import BlogPosts from '../components/posts/BlogPosts';

export default function Posts() {
  const isLightTheme = useSelector((state) => state.theme.theme === 'light');

  return (
    <>
      <Header />
      <div
        className={`min-h-screen min-w-screen flex flex-col items-center justify-around p-6 ${
          isLightTheme ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white'
        }`}
      >
        {/* Welcome Message */}
        <h1
          className={`text-4xl font-bold mb-4 text-center ${
            isLightTheme ? 'text-green-600' : 'text-green-400'
          }`}
        >
          Have a look at my Posts!
        </h1>
        <p
          className={`text-lg mb-4 ${
            isLightTheme ? 'text-gray-700' : 'text-gray-300'
          }`}
        >
          Explore the different posts of this simple Next.js application.
        </p>

        {/* Links to all posts */}
        <h2
          className={`text-5xl font-bold mb-6 ${
            isLightTheme ? 'text-yellow-600' : 'text-yellow-500'
          }`}
        >
          Blog Posts
        </h2>
        <ul className="sm:w-full flex flex-wrap gap-4 justify-center">
          <BlogPosts isLightTheme = {isLightTheme} />
        </ul>

        {/* Navigation Links */}
        <div className="space-x-4 mt-6">
          <Link
            href="/about"
            className={`py-2 px-4 rounded transition ${
              isLightTheme
                ? 'bg-green-600 text-gray-100 hover:bg-green-500'
                : 'bg-green-500 text-gray-900 hover:bg-green-400'
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`py-2 px-4 rounded transition ${
              isLightTheme
                ? 'bg-green-600 text-gray-100 hover:bg-green-500'
                : 'bg-green-500 text-gray-900 hover:bg-green-400'
            }`}
          >
            Contact
          </Link>
          <Link
            href="/"
            className={`py-2 px-4 rounded transition ${
              isLightTheme
                ? 'bg-green-600 text-gray-100 hover:bg-green-500'
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
