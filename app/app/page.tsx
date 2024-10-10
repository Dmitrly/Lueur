"use client"
import Posts from "@/components/Posts/Posts";
import Stories from "@/components/Stories/Stories";
import { IPost } from "@/lib/Models/Post.model";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {

  const fetchPosts = async () => {
    const res = await axios.get('/api/posts')
    const data = res.data
    return data
  }
  const fetchUsers = async () => {
    const res = await axios.get('/api/users')
    return res.data
  }
  const [posts, setPosts] = useState<Array<IPost>>([])
  useEffect(() => {
    // fetchProducts().then(data => setPosts(data))
    fetchUsers().then(data => console.log(data))
    fetchPosts().then(data => setPosts(posts))
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
