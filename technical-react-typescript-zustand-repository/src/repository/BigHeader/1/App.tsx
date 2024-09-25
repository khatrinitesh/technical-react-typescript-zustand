import React, { useEffect, useState } from "react";
import { useBlackWhiteImgStore } from "../../../store/useBlackWhiteImg";
import { useBigHeaderStore } from "../../../store/useBigHeader";

const RepositoryApp: React.FC = () => {
  return (
    <>
      <BigHeaderComp />
      <BigHeaderUpdate/>
    </>
  );
};

export default RepositoryApp;

const BigHeaderComp: React.FC = () => {

    const {title} = useBigHeaderStore();
  return (
    <>
      <h1 style={{fontSize: '48px', textAlign: 'center', margin: '20px 0'}}>
        {title}
      </h1>
    </>
  );
};

const BigHeaderUpdate:React.FC = () => {
    const {setTitle} = useBigHeaderStore();
    const [inputVal,setInputVal] = useState('');

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        setTitle(inputVal)
        setInputVal('');
    }
    return(
        <>
        <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginBottom: '20px' }}>
            <input type="text" className="border bg-red-500" value={inputVal} onChange={(e) => setInputVal(e.target.value)} placeholder="enter new title" style={{padding:'10px',fontSize:'16px'}} />
            <button type="submit" style={{padding: '10px', fontSize: '16px', marginLeft: '10px'}}>Update Title</button>
        </form>
        </>
    )
}
