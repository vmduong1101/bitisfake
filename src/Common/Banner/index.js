import React from 'react'
import banner1 from './../../img/brand1.jpg'
import banner2 from './../../img/brand2.jpg'
import banner3 from './../../img/brand3.jpg'
export default function Banner() {

    return (
        <div className='banner flex mx-32 mt-2 justify-between'>
            <div className='bannerItem itemss parallax'>
                <a href='#' className='relative'>
                    <img src={banner1} className='w-403 h-56 rounded-md cursor-pointer' />
                </a>
            </div>
            <div className='bannerItem itemss parallax delay-01'>
                <a href='#' className='relative'>
                    <img src={banner2} className='w-403 h-56 rounded-md cursor-pointer' />
                </a>
            </div>
            <div className='bannerItem itemss parallax delay-04'>
                <a href='#' className='relative'>
                    <img src={banner3} className='w-403 h-56 rounded-md cursor-pointer' />
                </a>
            </div>
        </div>
    )
}
