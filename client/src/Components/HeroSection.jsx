import React from 'react'
import banner from '../assets/banner.avif'
const HeroSection = () => {
  return (
    <div className='flex items-center justify-center mt-6 w-full'>
      <img src={banner} alt="banner" />
    </div>
  )
}

export default HeroSection
