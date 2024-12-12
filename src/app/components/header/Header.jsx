'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/app/redux/themeSlice';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    // Set the theme on page load
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`${
        theme === 'light' ? 'bg-background-light' : 'bg-background-dark'
      } border-b ${
        theme === 'light' ? 'border-gray-300' : 'border-gray-700'
      }`}
    >
      <div className="relative container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div
          className={`text-xl font-bold ${
            theme === 'light' ? 'text-primary-light' : 'text-primary-dark'
          }`}
        >
          <Link href="/">ZIMO</Link>
        </div>

        <button
          onClick={handleThemeToggle}
          className={`p-2 rounded-full ${
            theme === 'light' ? 'bg-gray-700 text-gray-100 hover:bg-gray-600' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>

        {/* Hamburger Icon (Visible on small screens) */}
        <button
          className={`text-2xl ${
            theme === 'light' ? 'text-primary-light' : 'text-primary-dark'
          } md:hidden focus:outline-none`}
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full ${
            theme === 'light' ? 'bg-background-light' : 'bg-background-dark'
          } md:static md:flex md:space-x-6 md:w-auto md:bg-transparent`}
        >
          <ul
            className={`flex flex-col md:flex-row md:space-x-6 ${
              theme === 'light' ? 'text-text-light' : 'text-text-dark'
            }`}
          >
            <li
              className={`border-b ${
                theme === 'light' ? 'border-gray-300' : 'border-gray-700'
              } md:border-none`}
            >
              <Link
                href="/"
                className={`block py-2 px-4 ${
                  theme === 'light'
                    ? 'hover:text-linkHover-light'
                    : 'hover:text-linkHover-dark'
                } text-center`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li
              className={`border-b ${
                theme === 'light' ? 'border-gray-300' : 'border-gray-700'
              } md:border-none`}
            >
              <Link
                href="/about"
                className={`block py-2 px-4 ${
                  theme === 'light'
                    ? 'hover:text-linkHover-light'
                    : 'hover:text-linkHover-dark'
                } text-center`}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li
              className={`border-b ${
                theme === 'light' ? 'border-gray-300' : 'border-gray-700'
              } md:border-none`}
            >
              <Link
                href="/contact"
                className={`block py-2 px-4 ${
                  theme === 'light'
                    ? 'hover:text-linkHover-light'
                    : 'hover:text-linkHover-dark'
                } text-center`}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className={`block py-2 px-4 ${
                  theme === 'light'
                    ? 'hover:text-linkHover-light'
                    : 'hover:text-linkHover-dark'
                } text-center`}
                onClick={() => setMenuOpen(false)}
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
