import React, { useState } from 'react';
import useUseStore from '../store/store';

interface EditProps {
    user:{
        id:number;
        name:string;
        email:string;
    }
    onClose:() => void;
}

const EditUser:React.FC<EditUser> = ({user,onClose}) => {
    const {updateUser} = useUseStore();
    const [name,setName] = useState(user.name);
    const [email,setEmail] = useState(user.email);

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        updateUser({
            ...user,
            name,
            email
        });
        onClose();
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Edit user</h3>
        <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
            Name:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type='submit'>Save</button>
        <button type='button' onClick={onClose}>Cancel</button>
      </form>
    </>
  );
}

export default EditUser;
