import { create } from "zustand";
import { Post } from "../interface";

interface PostStore {
    posts:Post[];
    setPosts:(posts:Post[]) => void;
    fetchPosts:() => void;
}

export const usePostStore = create<PostStore>((set) => ({
    posts:[],
    setPosts:(posts) => set({posts}),
    fetchPosts: async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json();
            set({
                posts:data
            })
        } catch (error) {
            console.error('error fetching posts:',error)
        }
    }
}))