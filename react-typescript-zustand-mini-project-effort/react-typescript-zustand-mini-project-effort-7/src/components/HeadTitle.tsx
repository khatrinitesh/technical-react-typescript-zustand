import React from 'react';
import { headTitleType } from '../interface';
import './HeadTitle.css';

const HeadTitle:React.FC<headTitleType> = ({headTitleStyle,children}) => {
  return (
    <>
      <h2 className={`${headTitleStyle} headTitle`}>{children}</h2>
    </>
  );
}

export default HeadTitle;