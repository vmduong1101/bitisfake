import React from 'react';
import Slider from "react-slick";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GoPackage } from "react-icons/go";
import { GoHistory } from "react-icons/go";
export default function Stage() {

    // const ArrowLeft = ({ className, style, onClick }) => (
    //     <button
    //         onClick={onClick}
    //         className={className}
    //         style={{ ...style, display: 'block', color: 'black', fontSize: '30px', marginTop: '-5px', marginLeft: '30%' }}
    //     >
    //         {/* <MdOutlineArrowBackIos /> */}
    //         <img src='https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png' />
    //     </button >
    // );
    // const ArrowRight = ({ className, style, onClick }) => (
    //     <button
    //         onClick={onClick}
    //         className={className}
    //         style={{ ...style, color: 'black', display: 'block', fontSize: '30px', marginTop: '-5px', marginRight: '30%', }}>

    //         <MdOutlineArrowForwardIos />
    //     </button>
    // );
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", color: 'black', fontSize: '20px' }}
                onClick={onClick}
            >
                <MdOutlineArrowForwardIos />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", color: 'black', fontSize: '20px' }}
                onClick={onClick}
            >
                <MdOutlineArrowBackIos />
            </div>
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className='w-70% text-center m-auto mt-6 px-28'>
            <Slider {...settings}>
                <div className='flex items-center'>
                    <div className='flex items-center justify-center'>
                        <TbTruckDelivery className='w-6 h-6 mr-3' />
                        <h3><span className='text-black font-bold'>Miễn phí vận chuyển</span> với hóa đơn trên 1.5 triệu ở tất cả các tỉnh thành khác</h3>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center justify-center'>
                        <GoHistory className='w-6 h-6 mr-3' />
                        <h3><span className='text-black font-bold'>Hổ trợ đổi size</span> tại tất cả cửa hàng trong vòng 1 tuần</h3>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center justify-center'>
                        <GoPackage className='w-6 h-6 mr-4' />
                        <h3><span className='text-black font-bold'>Miễn phí vận chuyển</span> với hóa đơn trên 1 triệu ở thành phố Hồ Chí Minh</h3>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
