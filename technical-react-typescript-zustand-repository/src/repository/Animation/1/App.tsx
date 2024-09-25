import React from 'react';
import { ButtonState } from '../../../types';
import { useButtonstore } from '../../../store/useAnimatedButton';
import { useSearchStore } from '../../../store/useSearch';
import { useAnimationStore } from '../../../store/useAnimation';

const RepositoryApp:React.FC = () => {
  return (
        <>
      <Animation/>
    </>
  );
}

export default RepositoryApp;

const Animation:React.FC = () => {

    const {isHovered,toggleHover} = useAnimationStore();

    return(
        <>
         <div onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={{ width: '100px',
        height: '100px',
        backgroundColor: isHovered ? '#007BFF' : '#0056b3',
        borderRadius: '10px',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        boxShadow: isHovered ? '0px 10px 20px rgba(0, 0, 0, 0.3)' : 'none',}}>

         </div>
        </>
    )
}