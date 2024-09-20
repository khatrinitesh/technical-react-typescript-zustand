import React, { useEffect, useState } from "react";
import useStore from "../store/store";
import useUseStore from "../store/store";
import { useFetcher } from "react-router-dom";
import { fetchUsers } from "../api/api";
import EditUser from "./EditUser";

const Users: React.FC = () => {
    const { users, fetchUsers, deleteUser, isLoading, error } = useUseStore();
    const [editingUser, setEditingUser] = useState<{ id: number; name: string; email: string } | null>(null);
  
    useEffect(() => {
      fetchUsers();
    }, [fetchUsers]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => setEditingUser({ id: user.id, name: user.name, email: user.email })} style={{ marginLeft: '10px' }}>
              Edit
            </button>
            <button onClick={() => deleteUser(user.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {editingUser && (
        <EditUser user={editingUser} onClose={() => setEditingUser(null)} />
      )}
    </>
  );
};

export default Users;
