import React from 'react'

const Footer:React.FC = () => {

    const currentFullYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer bg-black text-white py-[10px]">
        <div className="container mx-auto">
            <p>Copyright {currentFullYear}</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
