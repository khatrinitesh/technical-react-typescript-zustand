import React from 'react'
import { BtnPrimaryState } from '../interface'

const BtnPrimary:React.FC<BtnPrimaryState> = ({btnStyle,onClick,children}) => {
  return (
    <>
      <button onClick={onClick} className={`${btnStyle} bg-black text-white flex items-center justify-center px-[20px] py-[10px]`}>{children}</button>
    </>
  )
}

export default BtnPrimary
