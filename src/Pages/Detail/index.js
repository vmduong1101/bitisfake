import React, { useEffect, useState } from 'react'
import { BsSuitHeart, BsGift, BsSuitHeartFill } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Cart/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { motion } from 'framer-motion'

export default function Detail({ products }) {

    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)
    const [photoIndex, setPhotoIndex] = useState(0)
    const dispatch = useDispatch()
    let { id } = useParams();

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectColor, setSelectColor] = useState('white')
    const [activeColor, setActiveColor] = useState(0)
    const [acitveSize, setActiveSize] = useState('')
    const [quantity, setQuantity] = useState(1)

    const getProductItem = (id) => {
        if (!products) return
        const data = products.filter((item) => item.id == id)
        setProduct(data)
    }
    useEffect(() => {
        getProductItem(id)
        setTimeout(() => {
            setLoading(false)
        }, 300);
    }, [])

    const handleOnChange = () => {

    }
    const handleAddCart = (item) => {

        dispatch(addToCart({ ...item, quantity }))
        toast.success('🦄 Đã thêm sản phẩm vào giỏ hàng', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }
    const handleClickColor = (color, index) => {
        setSelectColor(color)
        setActiveColor(index)
    }
    var formatter = new Intl.NumberFormat('vi-VN',
        { style: 'currency', currency: 'VND' }
    );
    return (
        <Spin spinning={loading} tip='Loading'>
            <motion.div className='mt-2'
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.3 }}
            >
                {product && product.map((item) => (
                    <div key={item.id}>
                        <p className='bg-gray-100 px-32 text-sm py-2'>Trang chủ / <span>{item.name}</span></p>
                        <div className='mx-32 mt-4'>
                            <div className='flex w-full'>
                                {item.colors.filter((item) => item.color === selectColor).map((item, index) => (
                                    <div className='w-3/5' key={index}>
                                        <div className='relative'>
                                            <img className='w-full cursor-zoom-in' src={item.picture[0]} onClick={() => setIsOpen(true)} />
                                            <div className='absolute top-2 right-2 text-xl rounded-full bg-white p-2 text-gray-400 rotate-180 share'>
                                                <AiOutlineShareAlt />
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-2 gap-1 mt-1 cursor-zoom-in' onClick={() => setIsOpen(true)}>
                                            {item.picture[1] &&
                                                <img src={item.picture[1]} alt='' />
                                            }
                                            {item.picture[2] &&
                                                <img src={item.picture[2]} alt='' />
                                            }
                                            {item.picture[3] &&
                                                <img src={item.picture[3]} alt='' />
                                            }
                                            {item.picture[4] &&
                                                <img src={item.picture[4]} alt='' />
                                            }
                                            {item.picture[5] &&
                                                <img src={item.picture[5]} alt='' />
                                            }
                                            {item.picture[6] &&
                                                <img src={item.picture[6]} alt='' />
                                            }
                                            {item.picture[7] &&
                                                <img src={item.picture[7]} alt='' />
                                            }
                                            {isOpen && (
                                                <Lightbox
                                                    mainSrc={item.picture[photoIndex]}
                                                    nextSrc={item.picture[(photoIndex + 1) % item.picture.length]}
                                                    prevSrc={item.picture[(photoIndex + item.picture.length - 1) % item.picture.length]}
                                                    onCloseRequest={() => setIsOpen(false)}
                                                    onMovePrevRequest={() =>
                                                        setPhotoIndex((photoIndex + item.picture.length - 1) % item.picture.length)
                                                    }
                                                    onMoveNextRequest={() =>
                                                        setPhotoIndex((photoIndex + 1) % item.picture.length)
                                                    }
                                                />
                                            )}

                                        </div>
                                    </div>
                                ))}

                                <div className='w-1/2 ml-11'>
                                    <h3 className='text-2xl'>{item.name}</h3>
                                    <h2 className='text-2xl my-3'>{formatter.format(item.price)}</h2>
                                    <span>Tình trạng: <span className='text-sky-500'>Còn hàng</span></span>
                                    <div className='flex w-3/4 my-3 gap-3'>
                                        {item.colors.map((item, index) => (
                                            <label className={activeColor === index ? 'colorSelects activeColorSelect' : 'colorSelects'} key={index} onClick={(e) => handleClickColor(item.color, index)}>
                                                <img className='w-20 h-20' src={item.imgSelect} alt='' />
                                            </label>
                                        ))}
                                    </div>
                                    <p>Kích thước:</p>
                                    <div className='size w-80 grid grid-cols-5 grid-rows-2 text-center'>
                                        {item.size[0] &&
                                            <span className={acitveSize == item.size[0] ? 'border border-gray-300 p-2 cursor-pointer font-bold activeSize' : 'border border-gray-300 p-2 cursor-pointer font-bold'} onClick={() => setActiveSize(item.size[0])}>{item.size[0]}</span>
                                        }
                                        {item.size[1] &&
                                            <span className={acitveSize == item.size[1] ? 'border border-gray-300 p-2 cursor-pointer font-bold activeSize' : 'border border-gray-300 p-2 cursor-pointer font-bold'} onClick={() => setActiveSize(item.size[1])}>{item.size[1]}</span>
                                        }
                                        {item.size[2] &&
                                            <span className={acitveSize == item.size[2] ? 'border border-gray-300 p-2 cursor-pointer font-bold activeSize' : 'border border-gray-300 p-2 cursor-pointer font-bold'} onClick={() => setActiveSize(item.size[2])}>{item.size[2]}</span>
                                        }
                                        {item.size[3] &&
                                            <span className={acitveSize == item.size[3] ? 'border border-gray-300 p-2 cursor-pointer font-bold activeSize' : 'border border-gray-300 p-2 cursor-pointer font-bold'} onClick={() => setActiveSize(item.size[3])}>{item.size[3]}</span>
                                        }
                                        {item.size[4] &&
                                            <span className={acitveSize == item.size[4] ? 'border border-gray-300 p-2 cursor-pointer font-bold activeSize' : 'border border-gray-300 p-2 cursor-pointer font-bold'} onClick={() => setActiveSize(item.size[4])}>{item.size[4]}</span>
                                        }
                                        {item.size[5] &&
                                            <span className={acitveSize == item.size[5] ? 'border border-gray-300 p-2 cursor-pointer font-bold activeSize' : 'border border-gray-300 p-2 cursor-pointer font-bold'} onClick={() => setActiveSize(item.size[5])}>{item.size[5]}</span>
                                        }
                                        {item.size[6] &&
                                            <span className={acitveSize == item.size[6] ? 'border border-gray-300 p-2 cursor-pointer font-bold activeSize' : 'border border-gray-300 p-2 cursor-pointer font-bold'} onClick={() => setActiveSize(item.size[6])}>{item.size[6]}</span>
                                        }
                                        {item.size[7] &&
                                            <span className={acitveSize == item.size[7] ? 'border border-gray-300 p-2 cursor-pointer font-bold activeSize' : 'border border-gray-300 p-2 cursor-pointer font-bold'} onClick={() => setActiveSize(item.size[7])}>{item.size[7]}</span>
                                        }
                                    </div>
                                    <div className='flex my-3'>
                                        <input type='button' className='bg-slate-200 w-11 text-center outline-none cursor-pointer' value='-' onClick={() => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity)} />
                                        <input type='text' className='w-16 h-11 text-center outline-none cursor-pointer' value={quantity} onChange={handleOnChange} />
                                        <input type='button' className='bg-slate-200 w-11 text-center outline-none cursor-pointer' value='+' onClick={() => quantity < 10 ? setQuantity(quantity + 1) : setQuantity(quantity)} />
                                    </div>
                                    <div className='flex w-full justify-between'>
                                        <button className='text-white p-3 w-4/5 border border-black font-medium addCart' onClick={() => handleAddCart(item)}><span>Thêm vào giỏ hàng</span></button>
                                        <button className='p-3 w-4/5 border border-black ml-3 font-medium'>Tư vấn:<span className='text-red-600'> 0966 158 666</span></button>
                                    </div>
                                    <div className='flex my-3 items-center'>
                                        <BsSuitHeart className='text-red-500 mr-2' />
                                        <p className='mb-0'>Thêm vào yêu thích</p>
                                    </div>
                                    <div className='border-dashed border-red-600 border rounded-sm'>
                                        <div className='w-full'>
                                            <div className='flex mt-3 ml-3 items-center'>
                                                <BsGift className='text-xl text-red-500' />
                                                <p className='text-lg font-medium ml-2 mb-0'>Ưu đãi đi kèm</p>
                                            </div>
                                            <div className='border-sky-900 rounded-lg m-3 mb-6'>
                                                <h5 className='text-white text-sm p-2 bg-sky-700 rounded-t-lg'>Quà tặng kèm của  {item.name}</h5>
                                                <p className='p-2 bg-blue-100'>Mua 1 sản phẩm chính để nhận ngay ưu đãi đi kèm (Tối đa 1)</p>
                                                <div className='border rounded-b-lg'>
                                                    {item.gift && item.gift.map((gift, index) => (
                                                        <div className='flex items-center m-2 cusDetail' key={index}>
                                                            <div className='border border-slate-400 w-14 mr-4 p-1'>
                                                                <img src={gift.img} />
                                                            </div>
                                                            <p className='text-sm'>{gift.title}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-amber-100 p-2 rounded-md my-4'>
                                        <p>Bạn vui lòng kiểm tra sản phẩm quà tặng có hiện thị tại trang giỏ hàng trước khi thanh toán</p>
                                    </div>
                                    <hr />
                                    <div>
                                        <h4 className='mt-2 font-medium'>MÔ TẢ SẢN PHẨM</h4>
                                        <div>
                                            <p className='mt-5 mb-3'>ĐẾ:</p>
                                            {item.infor.sole[0] &&
                                                <p className='my-3'>{item.infor.sole[0]}</p>
                                            }
                                            {item.infor.sole[1] &&
                                                <p className='text-sm my-3'>{item.infor.sole[1]}</p>
                                            }
                                            {item.infor.sole[2] &&
                                                <p className='text-sm my-3'>{item.infor.sole[2]}</p>
                                            }
                                            {item.infor.sole[3] &&
                                                <p className='text-sm'>{item.infor.sole[3]}</p>
                                            }
                                            <p className='mt-5 mb-3'>QUAI:</p>
                                            {item.infor.straps[0] &&
                                                <p className='text-sm my-3'>{item.infor.straps[0]}</p>
                                            }
                                            {item.infor.straps[1] &&
                                                <p className='text-sm my-3'>{item.infor.straps[1]}</p>
                                            }
                                            {item.infor.straps[2] &&
                                                <p className='text-sm'>{item.infor.straps[2]}</p>
                                            }
                                            <p className='mt-5 mb-3'>LÓT ĐẾ TRONG:</p>
                                            {item.infor.insole[0] &&
                                                <p className='text-sm my-3'>{item.infor.insole[0]}</p>
                                            }
                                            {item.infor.insole[1] &&
                                                <p className='text-sm my-3'>{item.infor.insole[1]}</p>
                                            }
                                            {item.infor.insole[2] &&
                                                <p className='text-sm'>{item.infor.insole[2]}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' mx-32'>
                            <h3 className='mt-4 text-blue-800'>SẢN PHẨM LIÊN QUAN</h3>
                            <hr />
                            <div>
                                <div className='flex my-5 items-center flex-wrap items'>
                                    <div className='w-imgDetail containerItem bg-white relative'>
                                        <div className='relative'>
                                            <p className='absolute top-2 left-3 text-sm z-20'>Mới</p>
                                            <BsSuitHeartFill className='absolute right-3 top-2 text-lg cursor-pointer z-20 hover:text-red-600' />
                                            <img className='img1 h-imgDetail cursor-pointer' src='https://product.hstatic.net/1000230642/product/09900xam__3__30609598c8554a71b87d26d189cbe3f9_grande.jpg' />
                                            <img className='img2 h-imgDetail cursor-pointer opacity-0 absolute top-0' src='https://product.hstatic.net/1000230642/product/dsmh09700trg__5__669aaa867ce24e848d2e3d6c82ec1dc1_grande.jpg' />
                                        </div>
                                        <div className='px-2'>
                                            <div className='flex justify-between items-center my-1 text-15px'>
                                                <p>+<span> 7 </span>size</p>
                                                <p>+<span> 3 </span>Màu sắc</p>
                                            </div>
                                            <h3 className='hover:text-sky-800 cursor-pointer text-sm'>[Phiên Bản Kỷ Niệm 40 Năm] Giày Thể Thao Nam Hunter X DSMH09700TRG (Trắng)</h3>
                                            <h3>1,236,000 ₫</h3>
                                        </div>
                                        <div className='button text-center py-4'>
                                            <button className='bg-black text-white px-4 py-1 rounded-sm'>Mua ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
                <ToastContainer />
            </motion.div >
        </Spin >
    )
}
