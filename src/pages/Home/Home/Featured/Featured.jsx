import React from 'react'
import SectionTitle from '../../../../assets/components/SectionTitle/SectionTitle'
import featuredImg from '../../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
  return (
    <div className='featured-item bg-fixed text-white pt-8 my-20'>
        <SectionTitle
        subHeading={'Check it Out'}
        heading={'form our menu'}

        />
        <div className='md: flex justify-center items-center bg-slate-700 opacity-50 pb-20 pt-12 px-36'>
            <div>
                <img src={featuredImg} alt="" />
            </div>
           <div className='md: ml-10'>
           <p>Aug 20,2029</p>
            <p className='uppercase'>where can i get some?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita debitis magni explicabo possimus, ipsam ratione beatae maxime velit esse necessitatibus atque quod omnis illo incidunt quas. Neque incidunt deserunt aliquid, placeat rem quas nemo facere consequuntur hic atque obcaecati ex, architecto dicta soluta tempore porro necessitatibus optio ipsa pariatur minus.</p>
            <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
           </div>
        </div>
        </div>
  )
}

export default Featured