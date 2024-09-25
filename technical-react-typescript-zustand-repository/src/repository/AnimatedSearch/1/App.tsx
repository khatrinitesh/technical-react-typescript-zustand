import React from 'react';
import { ButtonState } from '../../../types';
import { useButtonstore } from '../../../store/useAnimatedButton';
import { useSearchStore } from '../../../store/useSearch';

const RepositoryApp:React.FC = () => {
  return (
        <>
      <AnimatedSearch/>
    </>
  );
}

export default RepositoryApp;

const AnimatedSearch:React.FC = () => {

    const {searchTerm,setSearchTerm} = useSearchStore();
    
    return(
        <>
        <div style={{position:'relative',display:'inline-flex'}}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='search...' style={{ padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: searchTerm ? '250px' : '150px',
          transition: 'width 0.3s ease',
          outline: 'none',}}/>
          {searchTerm && (
            <>
            <button onClick={()=> setSearchTerm('')} style={{position: 'absolute',
            top:'10px',
            right: '5px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: '#ff0000',
            transition: 'color 0.3s ease',}}>X</button>
            </>
          )}
          </div>
        </>
    )
}