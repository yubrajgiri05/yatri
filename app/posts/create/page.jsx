"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/posts", {
        title,
        content,
        date, // Ensure the date is sent to the backend
      });
      router.push("/posts");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
<div className="flex flex-col items-center justify-center min-h-screen w-full py-20 bg-slate-300">
      <h1 className="text-4xl font-manrope font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">Create New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col bg-white space-y-4 mt-6 border px-8 py-12 w-96 rounded-md">
        <input
          type="text"
          placeholder="Title"
          value={title}
          className="p-2 border border-slate-500 rounded-md"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
  <textarea
  placeholder="Content"
  value={content}
  className="p-2 border border-slate-500 rounded-md min-h-[120px] resize-y"
  onChange={(e) => setContent(e.target.value)}
  required
/>
        <input
          type="date"
          value={date}
          className="p-2 border border-slate-500 rounded-md text-gray-700"
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-green-300 py-1.5 rounded-md">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default Page;
