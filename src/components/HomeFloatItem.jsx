import React from 'react'
import { Link } from 'react-router-dom'

const HomeFloatItem = (props) => {
    return (
       
            <Link to={props.itemurl}  key={props.id} className='lg:w-190 min-w-[190px] bg-cardOverlay backdrop-blur-md rounded-3xl p-4 flex flex-col items-center justify-center drop-shadow-lg'>
                <img src={props.imagesrc} alt='flaotingItem' className='w-20 lg:w-40 -mt-10 lg:-mt-20'></img>
                <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{props.heading}</p>
                <p className='text-[12px] lg:text-sm font-semibold text-lighttextGray my-1 lg:my-3'>{props.subheading}</p>
                <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>Rs. </span>{props.price}</p>
            </Link>
       
    )
}

export default HomeFloatItem