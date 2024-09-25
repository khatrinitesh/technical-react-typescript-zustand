import React, { useEffect, useState } from "react";
import { useBlurBackgroundImageStore } from "../../../store/useBlurBackgroundImage";

const RepositoryApp: React.FC = () => {

    useEffect(() => {
        document.title = 'body text'
        document.body.style.backgroundColor = 'red'
        document.body.style.color = 'white'
        document.body.style.fontSize = '20px'
        document.body.style.padding = '20px 10px'
        document.body.style.margin = '30px'
        
    })
  return (
    <>
      <p>saddadd</p>
    </>
  );
};

export default RepositoryApp;
