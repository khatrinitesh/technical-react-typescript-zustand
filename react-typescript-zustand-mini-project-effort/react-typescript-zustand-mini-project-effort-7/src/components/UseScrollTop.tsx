import React from 'react';

const UseScrollTop:React.FC = () => {

     // Function to scroll to the top of the page
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // This makes the scroll smooth
    });
  };
  return (
    <>
       <button 
      onClick={handleScrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 20px",
        backgroundColor: "#2980b9",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Scroll to Top
    </button>
    </>
  );
}

export default UseScrollTop;
