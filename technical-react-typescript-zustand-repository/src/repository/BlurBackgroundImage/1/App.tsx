import React, { useEffect, useState } from "react";
import { useBlurBackgroundImageStore } from "../../../store/useBlurBackgroundImage";

const RepositoryApp: React.FC = () => {
  return (
    <>
      <BlurBackgroundImageComp />
      <ToggleButton/>
    </>
  );
};

export default RepositoryApp;


const BlurBackgroundImageComp: React.FC = () => {
    const {isBlurred,toggleBlur} =useBlurBackgroundImageStore();
  return (
    <>
      <div className={`relative background ${isBlurred ? 'blurred' : ''}`}>
        <h1 className="title">my awesome background</h1>
      </div>
    </>
  );
};

const ToggleButton: React.FC = () => {
    const toggleBlur = useBlurBackgroundImageStore((state) => state.toggleBlur);
  
    return (
      <button onClick={toggleBlur} style={{ margin: '20px', padding: '10px' }}>
        Toggle Blur
      </button>
    );
  };
