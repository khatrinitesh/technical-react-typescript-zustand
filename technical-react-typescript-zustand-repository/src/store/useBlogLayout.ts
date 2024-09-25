import { create } from "zustand";
import { BlogPost } from "../types";

export const useBlogLayoutStore = create<BlogPost>((set) => ({
    posts:[],
    addPost:(post) => set((state) => ({posts:[...state.posts,post]})),
    removePost:(id) => set((state) => ({posts:state.posts.filter(post => post.id !== id)}))
}))