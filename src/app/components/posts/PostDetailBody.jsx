"use client"
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const PostDetailBody = ({post}) => {
    const isLightTheme = useSelector((state)=>state.theme.theme === "light")
  return (
    <div className={`min-h-screen min-w-screen ${isLightTheme ? 'bg-white text-black' : 'bg-gray-900 text-white'} flex flex-col items-center justify-around p-6`}>
    {/* Welcome Message */}
    <h1 className="text-5xl font-bold">Details of the Post <span className="text-yellow-500">{post.id}</span></h1>
    <div className="max-w-[700px] p-5 rounded-md border-yellow-500 border flex flex-col gap-5 shadow-lg bg-slate-700">
      <h2><span className="text-yellow-300 text-xl">Id : </span>{post.id}</h2>
      <h2><span className="text-yellow-300 text-xl">Title : </span>{post.title}</h2>
      <p><span className="text-yellow-300 text-xl">Body : </span>{post.body}</p>
    </div>

    {/* Navigation Links */}
    <div className="space-x-4 mt-5">
      <Link
        href="/about"
        className={`py-2 px-4 rounded font-bold transition ${
          isLightTheme
            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
            : 'bg-yellow-500 text-white hover:bg-green-400'
        }`}
      >
        About
      </Link>
      <Link
        href="/contact"
        className={`py-2 px-4 rounded font-bold transition ${
          isLightTheme
            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
            : 'bg-yellow-500 text-white hover:bg-green-400'
        }`}
      >
        Contact
      </Link>
      <Link
        href="/posts"
        className={`py-2 px-4 rounded font-bold transition ${
          isLightTheme
            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
            : 'bg-yellow-500 text-white hover:bg-green-400'
        }`}
      >
        Posts
      </Link>
      <Link
        href="/"
        className={`py-2 px-4 rounded font-bold transition ${
          isLightTheme
            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
            : 'bg-yellow-500 text-white hover:bg-green-400'
        }`}
      >
        Home
      </Link>
    </div>
  </div>
)
}

export default PostDetailBody
