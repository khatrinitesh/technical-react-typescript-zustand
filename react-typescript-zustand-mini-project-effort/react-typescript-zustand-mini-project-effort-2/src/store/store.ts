import { create } from "zustand";
import { fetchUsers } from './../api/api';

interface User {
    id:number;
    name:string;
    username:string;
    website:string;
    phone:string;
    email:string;
    
}

interface UserStore{
    users:User[];
    fetchUsers:() => Promise<void>;
    isLoading:boolean;
    error:string | null;
    deleteUser:(id:number) => void; // New method
    updateUser:(updatedUser:User) => void; // new method
}

const useUseStore = create<UserStore>((set) => ({
    users:[],
    isLoading:false,
    error:null,
    fetchUsers:async() => {
        set({
            isLoading:true,
            error:null
        })
        try {
            const users = await fetchUsers();
            set({users});
            console.log(users)
        } catch (error) {
            set({Error:(error as Error).message})
        }
        finally{
            set({isLoading:false})
        }
    },
    // delete
    deleteUser:(id:number) => {
        set((state) => ({
            users:state.users.filter((user) => user.id !== id)
        }))
    },
    // edit
    updateUser: (updatedUser: User) => {
        set((state) => ({
          users: state.users.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
          ),
        }));
      },
}))

export default useUseStore;