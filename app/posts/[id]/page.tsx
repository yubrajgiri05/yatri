"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ({params}:any) {
    const id = params.id;

    const [post, setPost] = useState({});

    useEffect(() => {
        if(id){
            fetchPost();
        }
    }, [id]);

    const fetchPost = async () => {
        const res = await axios.get(`http://localhost:3001/posts/${id}`);
        setPost(res.data);
    }

    return (
        <>
           <div className="container-max mt-8">
           <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">{post.content}</p>
            <div className=" bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mt-6 text-sm w-fit">Publish at : {post.date}</div>

           </div>
        </>
    )
}
