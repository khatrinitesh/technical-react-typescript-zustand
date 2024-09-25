import React, { useEffect, useState } from "react";
import { useBlockButtonStore } from "../../../store/useBlockButtons";

const RepositoryApp: React.FC = () => {
  return (
    <>
      <BlockButtonComp />
    </>
  );
};

export default RepositoryApp;

const BlockButtonComp: React.FC = () => {
  const { isBlocked, toggleBlock } = useBlockButtonStore();

  const handleClick = () => {
    if (!isBlocked) {
      console.log("Button clicked!");
      // Add any additional logic here
    }
  };

  return (
    <>
    <button onClick={handleClick} disabled={isBlocked}>
        Click Me
      </button>
      <button onClick={toggleBlock}>
        {isBlocked ? 'Unblock' : 'Block'}
      </button>
    </>
  )
};
