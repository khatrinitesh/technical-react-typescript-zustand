import React from 'react';
import { BtnPrimaryProps } from '../interface/BtnPrimary';

const BtnPrimary:React.FC<BtnPrimaryProps> = ({label,onClick}) => {
  return (
    <>
       <button onClick={onClick} className="btn-primary">
      {label}
    </button>
    </>
  );
}

export default BtnPrimary;
