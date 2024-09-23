import React, { useEffect } from 'react';
import { fetchUsers } from './../api/api';
import { useUserStore } from '../store/useStore';
import BtnPrimary from '../components/BtnPrimary';

const Home:React.FC = () => {
    const {users,fetchUserData} = useUserStore();

    useEffect(() => {
        fetchUserData()
    },[fetchUserData])
  return (
    <div>
        <BtnPrimary label="Fetch users" onClick={fetchUserData}/>
        <ul >
      {users.map((user) => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
      </ul>
    </div>
  );
}

export default Home;
