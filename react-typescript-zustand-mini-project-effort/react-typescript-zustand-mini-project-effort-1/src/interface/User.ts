export interface Users {
    id:number;
    name:string;
    email:string;
    website:string;
    phone:string;
}

export interface UserStore {
    users:Users[];
    fetchUserData:() => Promise<void>;
}