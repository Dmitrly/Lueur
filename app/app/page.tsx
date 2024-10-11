"use client"
import Posts from "@/components/Posts/Posts";
import Stories from "@/components/Stories/Stories";
import { IPost } from "@/lib/Models/Post.model";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
  const [posts, setPosts] = useState<Array<IPost>>([]);
  async function fetchPosts() {
    const res = await axios.get('/api/posts')
    return res.data
  }
  
  useEffect(() => {
    fetchPosts().then(data => setPosts(data))
  }, [])


  return (
    <div className="">
      <main>
        <Stories />
        <Posts posts={posts}/>
      </main>
    </div>
  );
}
