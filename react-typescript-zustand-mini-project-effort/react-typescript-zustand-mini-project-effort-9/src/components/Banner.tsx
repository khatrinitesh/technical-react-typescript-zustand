import React from 'react'
import { BannerState } from '../interface'

const Banner:React.FC<BannerState> = ({children,bannerStyle}) => {
  return (
    <>
      <div className=' py-[100px] bg-orange-500' style={bannerStyle}>
        {children}
      </div>
    </>
  )
}

export default Banner
