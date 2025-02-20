"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecords = async () => {
    try {
      const res = await axios.get("http://localhost:3001/posts");
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="container py-8 bg-slate-200 text-white min-h-screen">
      <div className="flex justify-between pb-8">
        <h1 className="text-3xl font-bold text-indigo-600">Blog Posts</h1>
        <Link href="/posts/create" className="bg-green-700 text-white font-bold py-2 px-4">
          Create new Post
        </Link>
      </div>

      <div className="w-full h-full flex gap-12 flex-wrap justify-start">
        {loading
          ? [...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-800 animate-pulse rounded-lg sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col h-auto p-6"
              >
                <div className="h-6 bg-gray-600 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-600 rounded w-full mb-3"></div>
                <div className="h-4 bg-gray-600 rounded w-5/6"></div>
              </div>
            ))
          : posts.map((post) => (
                <Link key={post.id} href={`/posts/${post.id}`} passHref
                  className="bg-gray-800 shadow-md border border-gray-700 rounded-lg w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col h-auto transform transition duration-300 hover:scale-105 flex-shrink-0"
                >
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <h5 className="text-white font-bold text-2xl tracking-tight mb-2 line-clamp-2">
                      {post.title}
                    </h5>
                    <p className="font-normal text-gray-300 mb-6 flex-grow line-clamp-5 text-justify">
                      {post.content}
                    </p>
                    <div className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-4 rounded-full text-sm w-fit">
                      📅 Publish Date: {post.date}
                    </div>
                  </div>
                </Link>
            ))}
      </div>
    </div>
  );
};

export default Page;
