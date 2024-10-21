"use client"
import Posts from "@/components/Posts/Posts";
import Stories from "@/components/Stories/Stories";
import { IPost } from "@/lib/Models/Post.model";
import axios from "axios";
import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Home() {
  const [posts, setPosts] = useState<Array<IPost>>([]);
  const { status } = useSession()
  // const router = useRouter()
  async function fetchPosts() {
    const res = await axios.get('/api/posts')
    return res.data
  }
  
  useEffect(() => {
    // if(status !== 'authenticated'){
    //   router.replace('/')
    //   console.log("push")
    // }else{
      fetchPosts().then(data => setPosts(data))
    // }
  }, [status])

  useEffect(() => {
    console.log(posts[0])
  }, [posts])

  return (
    <div className="">
      <main>
        <Stories />
        <Posts posts={posts}/>
      </main>
    </div>
  );
}
