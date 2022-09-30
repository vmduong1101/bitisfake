import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import png6 from './../../img/slider/6.png'
import png3 from './../../img/slider/3.png'
import png9 from './../../img/slider/9.png'
import png5 from './../../img/slider/5.png'
import png1 from './../../img/slider/1.png'
import png8 from './../../img/slider/8.png'
import png7 from './../../img/slider/7.png'
import png4 from './../../img/slider/4.png'
import png10 from './../../img/slider/10.png'


export default function SlideShow() {
    const [active, setActive] = useState(false)

    const handleClickSlide = () => {
        setActive(!active)
    }

    return (
        <div className='bg-slate-200 h-slider relative mx-32'>
            <div className='bg-slate-100 w-70% h-80% absolute top-1/2 left-1/2 -translate-y-50% -translate-x-50%'>
                <div className='background-rotate absolute bottom-0 left-0 w-full h-96 overflow-hidden'>
                    <div className='bg-rotate'></div>
                </div>
                <div className='list'>
                    {active ? <div>
                        <div className='item hide' id='item-0'>
                            <img src={png6} alt='' />
                            <img src={png3} alt='' />
                            <img src={png9} alt='' />
                            <img src={png3} alt='' />

                            <div className='content'>
                                <div className='itemText'>
                                    <img src={png6} alt='' /><span>Sản phẩm<span>45%</span></span>
                                </div>
                                <div className='itemText'>
                                    <img src={png3} alt='' /><span>Sản phẩm<span>45%</span></span>
                                </div>
                                <div className='itemText'>
                                    <img src={png9} alt='' /><span>Sản phẩm<span>45%</span></span>
                                </div>
                            </div>
                        </div>
                        <div className='item active' id='item-1'>
                            <img src={png5} alt='' />
                            <img src={png1} alt='' />
                            <img src={png8} alt='' />
                            <img src={png1} alt='' />

                            <div className='content'>
                                <div className='itemText'>
                                    <img src={png5} alt='' /><span>Sản phẩm<span>45%</span></span>
                                </div>
                                <div className='itemText'>
                                    <img src={png1} alt='' /><span>Sản phẩm<span>45%</span></span>
                                </div>
                                <div className='itemText'>
                                    <img src={png8} alt='' /><span>Sản phẩm<span>45%</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                        :
                        <div>
                            <div className='item active' id='item-2'>
                                <img src={png7} alt='' />
                                <img src={png3} alt='' />
                                <img src={png4} alt='' />
                                <img src={png3} alt='' />

                                <div className='content'>
                                    <div className='itemText'>
                                        <img src={png7} alt='' /><span>Sản phẩm<span>45%</span></span>
                                    </div>
                                    <div className='itemText'>
                                        <img src={png3} alt='' /><span>Sản phẩm<span>45%</span></span>
                                    </div>
                                    <div className='itemText'>
                                        <img src={png4} alt='' /><span>Sản phẩm<span>45%</span></span>
                                    </div>
                                </div>
                            </div>
                            <div className='item hide' id='item-3'>
                                <img src={png6} alt='' />
                                <img src={png1} alt='' />
                                <img src={png10} alt='' />
                                <img src={png1} alt='' />

                                <div className='content'>
                                    <div className='itemText'>
                                        <img src={png6} alt='' /><span>Sản phẩm<span>45%</span></span>
                                    </div>
                                    <div className='itemText'>
                                        <img src={png1} alt='' /><span>Sản phẩm<span>45%</span></span>
                                    </div>
                                    <div className='itemText'>
                                        <img src={png10} alt='' /><span>Sản phẩm<span>45%</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className='absolute right-0 bottom-0 cursor-pointer mr-3 mb-3 bg-red-100 rounded-lg' id='next' onClick={handleClickSlide}>
                        <lord-icon
                            src="https://cdn.lordicon.com/qjezzrrz.json"
                            trigger="hover"
                            colors="primary:#4be1ec,secondary:#6c16c7"
                            style={{ width: '50px', height: '40px' }}>
                        </lord-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}
