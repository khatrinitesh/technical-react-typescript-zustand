import { create } from "zustand";
import { PostState } from "../interface"

const usePostStore = create<PostState>((set) => ({
    posts:[],
    isLoading:true,
    isError:null,
    fetchPosts:async() => {
        set({
            isLoading:true
        });
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json();
            set({
                posts:data,
                isLoading:false
            });
        }
        catch(error){
            set({
                isError:'failed to fetch posts',
                isLoading:false
            })
        }
    },
    deletePost:(id) => {
        set((state) => ({
            posts:state.posts.filter((post) => post.id !== id)
        }))
    }
}))

export default usePostStore;