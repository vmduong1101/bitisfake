import React from 'react'
import Slider from "react-slick";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";


export default function News() {
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
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className='my-7 mx-32 news'>
            <Slider {...settings}>
                <div>
                    <img width='305px' className='h-203px' src='https://file.hstatic.net/1000230642/article/screen_shot_2020-08-11_at_14.16.31_e7e3513bc9994efbbf0c0aeea1d49525_grande.png' alt='' />
                    <h6 className='max-w-xs mt-2 hover:text-blue-800'>BITI’S ĐƯA NỀN TẢNG SỐ VÀO ĐÀO TẠO VÀ PHÁT TRIỂN NGUỒN NHÂN LỰC</h6>
                </div>
                <div>
                    <img width='305px' className='h-203px' src='https://file.hstatic.net/1000230642/article/e_39b824591591_image_hires_145617_c1ab0801cbcf4bbba8417036f8524b91_f2e0b368016f4bc892710ca7c34db901_grande.jpg' alt='' />
                    <h6 className='max-w-xs mt-2 hover:text-blue-800'>CẨM NANG PHÒNG TRÁNH LÂY NHIỄM VIRUS CORONA: 7 BƯỚC CẦN LÀM NGAY</h6>
                </div>
                <div>
                    <img width='305px' className='h-203px' src='https://file.hstatic.net/1000230642/article/cover_0806_763f935075434c9995305035848c4b71_grande.png' alt='' />
                    <h6 className='max-w-xs mt-2 hover:text-blue-800'>THE SOUND OF BITI’S: BƯỚC CHÂN SÓNG ĐÔI CÙNG THỜI ĐẠI</h6>
                </div>

                <div>
                    <img width='305px' className='h-203px' src='https://file.hstatic.net/1000230642/article/untitled-4_e763bcabb66a41368c31b36cf1bedc32_305a4ffb273f43a88ea8cb46746419b5_grande.jpg' alt='' />
                    <h6 className='max-w-xs mt-2 hover:text-blue-800'>6 ĐIỀU CẦN BIẾT VỀ CORONAVIRUS, CHỦNG VIRUS MỚI GÂY VIÊM PHỔI CẤP</h6>
                </div>
                <div>
                    <img width='305px' className='h-203px' src='https://file.hstatic.net/1000230642/article/untitled-4_64b590226f3e4e669236eacd85b6fb0c_grande.jpg' alt='' />
                    <h6 className='max-w-xs mt-2 hover:text-blue-800'>CÙNG BITI'S "LÌ XÌ MAY MẮN - MỞ LỘC ĐẦU NĂM" MỪNG XUÂN CANH TÝ 2020</h6>
                </div>
            </Slider>
        </div>
    )
}
