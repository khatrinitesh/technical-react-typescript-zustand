import React from 'react'
import Banner from '../components/Banner'

const Contact:React.FC = () => {
    const customStyle: React.CSSProperties = {
        backgroundColor: 'lightblue',
        color: 'darkblue',
        padding: '20px',
      };
  return ( 
    <>
      <Banner bannerStyle={customStyle}>
        <h3>Contact</h3>
        <p>Voluptate deserunt amet laborum sunt consectetur amet sunt eu nostrud.</p>
      </Banner>
    </>
  )
}

export default Contact
