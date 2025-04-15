// import React, { useEffect } from 'react'
import Banner from '../Banner/Banner'
import Category from './Category/Category'
import PopularMenu from './PopularMenu/PopularMenu'
import Featured from './Featured/Featured'
import Testimonials from './Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async'

const Home = () => {
    // useEffect(() => {
    //         document.title = "Bistro Boss | Home"; // 🛠️ Force it manually
    //       }, []);
  return (
    <div>
      <Helmet>
              <title>Bistro Boss | Home</title>
              {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
        <Banner/>
        <Category/>
        <PopularMenu/>
        <Featured/>
        <Testimonials/>
    </div>
  )
}

export default Home