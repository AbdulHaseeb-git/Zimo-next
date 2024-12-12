"use client"

import Link from 'next/link';

import React, { useEffect, useState } from 'react'

const BlogPosts =  ({isLightTheme}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data.slice(0, 10));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  },[]);
    
  if (error) return <p>Error loading posts: {error.message}</p>;
  if (loading) return <p>Loading...</p>;  // Loading state
  return (<>
    {posts?.map((post, index)=>(
        <li key={index}>
        <Link
          className={`py-2 px-4 rounded font-bold transition ${
              isLightTheme
              ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
              : 'bg-yellow-500 text-white hover:bg-green-400'
          }`}
          href={`/posts/${post.id}`}
          >
          {post.id}
        </Link>
      </li>

)) }
</>
)
}

export default BlogPosts
