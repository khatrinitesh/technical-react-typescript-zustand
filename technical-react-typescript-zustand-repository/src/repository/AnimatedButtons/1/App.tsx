import React from 'react';
import { ButtonState } from '../../../types';
import { useButtonstore } from '../../../store/useAnimatedButton';

const RepositoryApp:React.FC = () => {
  return (
        <>
        <h1>Animated Buttons with Zustand</h1>
      <AnimatedButton text="Animated button"/>
    </>
  );
}

export default RepositoryApp;

const AnimatedButton:React.FC<{text:string}> = ({text}) => {

    const {isHovered,setHovered} = useButtonstore();

    return(
        <>
        <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{backgroundColor: isHovered ? '#007BFF' : 'red',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',}}>{text}</button>
        </>
    )
}