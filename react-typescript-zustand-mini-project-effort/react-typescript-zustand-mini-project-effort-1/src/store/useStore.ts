import { create } from "zustand";
import { fetchUsers } from "../api/api"
import { UserStore } from "../interface/User";

export const useUserStore = create<UserStore>((set) => ({
    users:[],
    fetchUserData:async() => {
        const users = await fetchUsers();
        set({users});
    }
}))