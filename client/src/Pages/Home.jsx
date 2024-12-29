import React from 'react'
import HeroSection from '../Components/HeroSection'
import HomeProductListing from '../Components/HomeProductListing'
import BestSellingProducts from '../Components/BestSellingproducts'
import Track from '../Components/Track'

const Home = () => {
  return (
    <div>
      {/* <HeroSection/> */}
      <HomeProductListing/>
      <BestSellingProducts/>
      <Track/>
    </div>
  )
}

export default Home
