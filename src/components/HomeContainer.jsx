import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import HomeFloatItem from './HomeFloatItem'
import { heroData } from '../utils/data'


const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
            <div className='py-2 flrx-1 flex flex-col items-start justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                    <p>Bike Delivery</p>
                    <div className='w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={Delivery} alt="delivery" className='w-full h-full object-contain' />
                    </div>
                </div>
                <p className='text-[2.5rem] lg:text-[4.5em] font-bold tracking-wide text-headingColor'>
                    The fastest Delivery in <span className='text-[3rem] lg:text-[5rem] text-orange-600'>Your City</span>
                </p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In non assumenda eaque, dolores nemo iusto, aspernatur eius praesentium consequuntur officia, laborum officiis! Eum rerum similique suscipit debitis explicabo incidunt? Pariatur.
                </p>
                <button
                    type='button'
                    className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg ease-in-out duration-100'>
                    Order Now
                </button>
            </div>

            <div className='py-2 flex-1 flex flex-col items-center relative'>
                <img src={HeroBg} alt='hero-bg' className='ml-auto h-370 w-full lg:w-auto lg:h-650'></img>
                <div className='w-full h-full absolute top-0 left-0 flex gap-4 flex-wrap items-center justify-center lg:px-24 py-4'>
                    {heroData && heroData.map(HomeFloatItem)}
                </div>
            </div>

        </section>
    )
}

export default HomeContainer