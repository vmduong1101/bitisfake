import React, { useEffect, useReducer, useState } from 'react'
import { BsSuitHeartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './../../Pages/Cart/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useWindowScroll } from "react-use";


export default function Container({ products, type, page }) {
    const dispatch = useDispatch()
    const { y: pageYOffset } = useWindowScroll()

    useEffect(() => {
        let itemss = document.querySelectorAll('.itemss');
        itemss.forEach(item => {

            if (item.offsetTop - window.scrollY < 700) {
                item.classList.add('scroll');
            } else {
                item.classList.remove('scroll');
            }
        })

    }, [pageYOffset])

    const [product, setProduct] = useState(products)

    const handleClickType = (e) => {
        const value = e.target.innerHTML
        setTimeout(() => {
            setProduct(products.filter(item => item.category.type === value || item.category.sex === value))
        }, 100)
    }
    var formatter = new Intl.NumberFormat('vi-VN',
        { style: 'currency', currency: 'VND' }
    );
    const handleAddCart = (item) => {
        dispatch(addToCart({ ...item, quantity: 1 }))
        toast.success('🦄 Đã thêm sản phẩm vào giỏ hàng', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
        });
    }
    return (
        <div className='mx-32 mt-4 mb-14'>
            {type && type === 'nam' &&
                <ul className='list-none flex justify-between w-3/5 itemss parallax' onClick={(e) => handleClickType(e)}>
                    <li className='font-bold text-xl cursor-pointer'>Nam</li>
                    <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Hunter</li>
                    <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Sandal</li>
                    <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Giày Thể Thao</li>
                    <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Giày Đá Banh</li>
                    <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Giày Tây</li>
                    <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Dép</li>
                </ul>
            }
            {type && type === 'nu' &&
                <ul className='list-none flex justify-between w-2/5 itemss parallax' onClick={(e) => handleClickType(e)}>
                    <li className='font-bold text-xl cursor-pointer'>Nữ</li>
                    <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Hunter</li>
                    <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Sandal</li>
                    <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Giày Thể Thao Nữ</li>
                    <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Dép</li>
                </ul>
            }
            {type && type === 'Bé gái' &&
                <div className={page ? '' : 'grid grid-rows-none grid-cols-1/4 gap-2'}>
                    {page ? <div></div>
                        :
                        <div className='max-w-xs overflow-hidden itemss parallax'>
                            <img className='effect' width='320px' src='https://file.hstatic.net/200000522597/file/16_450x525_ffddf75b4924478997d49d7bcb3541d3.jpg' alt='' />
                        </div>
                    }
                    <div>
                        <ul className={page ? 'list-none flex justify-between w-3/5' : 'list-none flex justify-between w-4/5'} onClick={(e) => handleClickType(e)}>
                            <li className='font-bold text-xl cursor-pointer'>Bé gái</li>
                            <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Sandal</li>
                            <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Giày Thể Thao</li>
                            <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Giày Búp Bê</li>
                            <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Giày Tập Đi</li>
                            <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Dép</li>
                        </ul>
                        <hr />
                        <div className='items whitespace-nowrap w-810px overflow-hidden mt-3 h-29rem daugter itemss parallax delay-02'>
                            {product && product.map((item, index) => (
                                <div className='w-img containerItem bg-white relative inline-block mx-3' key={index}>
                                    <div className='relative'>
                                        <p className='absolute top-2 left-3 text-sm z-20'>Mới</p>
                                        <BsSuitHeartFill className='absolute right-3 top-2 text-lg cursor-pointer z-20 hover:text-red-600' />
                                        <Link to={`/detail/${item.id}`}>
                                            <img className='img1 w-img h-img cursor-pointer' src={item.imgHome[0]} />
                                            <img className='img2 w-img h-img cursor-pointer opacity-0 absolute top-0' src={item.imgHome[1]} />
                                        </Link>
                                    </div>
                                    <div className='px-2'>
                                        <div className='flex justify-between items-center my-1 text-15px'>
                                            <p>+<span>{item.size.length} </span>size</p>
                                            <p>+<span>{item.colors.length} </span>Màu sắc</p>
                                        </div>
                                        <Link to={`/detail/${item.id}`}>
                                            <h3 className='hover:text-sky-800 cursor-pointer text-sm h-16 whitespace-normal'>{item.name}</h3>
                                        </Link>
                                        <h3 className='text-15px'>{formatter.format(item.price)}</h3>
                                    </div>
                                    <div className='button text-center py-4'>
                                        <button className='bg-black text-white px-4 py-1 rounded-sm' onClick={() => handleAddCart(item)}>Mua ngay</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='text-center cursor-pointer my-5'>
                            <span className='border-b-2 border-black text-base font-normal hover:bg-black hover:text-white px-1 tran transition-all'><Link to='/female' className='text-black'>CÒN NHIỀU LẮM, XEM THÊM</Link></span>
                        </div>
                    </div>
                </div>
            }
            {type && type === 'Bé trai' &&
                <div className={page ? '' : 'grid grid-rows-none grid-cols-1/4 gap-2 mt-4'}>
                    <div>
                        <ul className={page ? 'list-none flex justify-between w-2/5' : 'list-none flex justify-between w-4/5'} onClick={(e) => handleClickType(e)}>
                            <li className='font-bold text-xl cursor-pointer'>Bé trai</li>
                            <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Sandal</li>
                            <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Giày Thể Thao</li>
                            <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Giày Tập Đi</li>
                            <li className='text-lg cursor-pointer opacity-80 hover:opacity-100'>Dép</li>
                        </ul>
                        <hr />
                        <div className='items whitespace-nowrap w-810px overflow-hidden mt-3 h-29rem daugter itemss parallax delay-02'>
                            {product && product.map((item, index) => (
                                <div className='w-img containerItem bg-white relative inline-block mx-3' key={index}>
                                    <div className='relative'>
                                        <p className='absolute top-2 left-3 text-sm z-20'>Mới</p>
                                        <BsSuitHeartFill className='absolute right-3 top-2 text-lg cursor-pointer z-20 hover:text-red-600' />
                                        <Link to={`/detail/${item.id}`}>
                                            <img className='img1 w-img h-img cursor-pointer' src={item.imgHome[0]} />
                                            <img className='img2 w-img h-img cursor-pointer opacity-0 absolute top-0' src={item.imgHome[1]} />
                                        </Link>
                                    </div>
                                    <div className='px-2'>
                                        <div className='flex justify-between items-center my-1 text-15px'>
                                            <p>+<span>{item.size.length} </span>size</p>
                                            <p>+<span>{item.colors.length} </span>Màu sắc</p>
                                        </div>
                                        <Link to={`/detail/${item.id}`}>
                                            <h3 className='hover:text-sky-800 cursor-pointer text-sm h-16 whitespace-normal'>{item.name}</h3>
                                        </Link>
                                        <h3 className='text-15px'>{formatter.format(item.price)}</h3>
                                    </div>
                                    <div className='button text-center py-4'>
                                        <button className='bg-black text-white px-4 py-1 rounded-sm' onClick={() => handleAddCart(item)}>Mua ngay</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='text-center cursor-pointer my-5'>
                            <span className='border-b-2 border-black text-base font-normal hover:bg-black hover:text-white px-1 tran transition-all'><Link to='/male' className='text-black'>CÒN NHIỀU LẮM, XEM THÊM</Link></span>
                        </div>
                    </div>
                    {page ? <div></div> :
                        <div className='max-w-xs overflow-hidden itemss parallax'>
                            <img className='effect' width='320px' src='https://file.hstatic.net/200000522597/file/17_450x525_45bed61e7fee4ed2bcdee5cedd7d4d32.jpg' alt='' />
                        </div>
                    }
                </div>
            }
            {type && type === 'nam' &&
                <div>
                    <hr className='itemss parallax' />
                    <div className='flex my-5 items-center flex-wrap items gap-1 itemss parallax delay-02'>
                        {product && product.map((item, index) => (
                            <div className={page ? 'w-imgPage containerItem bg-white relative' : 'w-img containerItem bg-white relative'} key={index}>
                                <div className='relative'>
                                    <p className='absolute top-2 left-3 text-sm z-20'>Mới</p>
                                    <BsSuitHeartFill className='absolute right-3 top-2 text-lg cursor-pointer z-20 hover:text-red-600' />
                                    <Link to={`/detail/${item.id}`}>
                                        <img className={page ? 'img1 w-imgPage h-imgPage cursor-pointer' : 'img1 w-img h-img cursor-pointer'} src={item.imgHome[0]} />
                                        <img className={page ? 'img2 w-imgPage h-imgPage cursor-pointer opacity-0 absolute top-0' : 'img2 w-img h-img cursor-pointer opacity-0 absolute top-0'} src={item.imgHome[1]} />
                                    </Link>
                                </div>
                                <div className='px-2'>
                                    <div className='flex justify-between items-center my-1 text-15px'>
                                        <p>+<span>{item.size.length} </span>size</p>
                                        <p>+<span>{item.colors.length} </span>Màu sắc</p>
                                    </div>
                                    <Link to={`/detail/${item.id}`}>
                                        <h3 className='hover:text-sky-800 cursor-pointer text-sm h-16'>{item.name}</h3>
                                    </Link>
                                    <h3 className='text-15px'>{formatter.format(item.price)}</h3>
                                </div>
                                <div className='button text-center py-4'>
                                    <button className='bg-black text-white px-4 py-1 rounded-sm' onClick={() => handleAddCart(item)}>Mua ngay</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='text-center my-20 cursor-pointer'>
                        <span className='border-b-2 border-black text-base font-normal hover:bg-black hover:text-white px-1 tran transition-all'><Link to={type} className='text-black'>CÒN NHIỀU LẮM, XEM THÊM</Link></span>
                    </div>
                </div>
            }
            {type && type === 'nu' &&
                <div>
                    <hr className='itemss parallax' />
                    <div className='flex my-5 items-center flex-wrap items gap-1'>
                        {product && product.map((item, index) => (
                            <div className={page ? 'w-imgPage containerItem bg-white relative itemss parallax' : 'w-img containerItem bg-white relative itemss parallax delay-02'} key={index}>
                                <div className='relative'>
                                    <p className='absolute top-2 left-3 text-sm z-20'>Mới</p>
                                    <BsSuitHeartFill className='absolute right-3 top-2 text-lg cursor-pointer z-20 hover:text-red-600' />
                                    <Link to={`/detail/${item.id}`}>
                                        <img className={page ? 'img1 w-imgPage h-imgPage cursor-pointer' : 'img1 w-img h-img cursor-pointer'} src={item.imgHome[0]} />
                                        <img className={page ? 'img2 w-imgPage h-imgPage cursor-pointer opacity-0 absolute top-0' : 'img2 w-img h-img cursor-pointer opacity-0 absolute top-0'} src={item.imgHome[1]} />
                                    </Link>
                                </div>
                                <div className='px-2'>
                                    <div className='flex justify-between items-center my-1 text-15px'>
                                        <p>+<span>{item.size.length} </span>size</p>
                                        <p>+<span>{item.colors.length} </span>Màu sắc</p>
                                    </div>
                                    <Link to={`/detail/${item.id}`}>
                                        <h3 className='hover:text-sky-800 cursor-pointer text-sm h-16'>{item.name}</h3>
                                    </Link>
                                    <h3 className='text-15px'>{formatter.format(item.price)}</h3>
                                </div>
                                <div className='button text-center py-4'>
                                    <button className='bg-black text-white px-4 py-1 rounded-sm' onClick={() => handleAddCart(item)}>Mua ngay</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='text-center my-20 cursor-pointer'>
                        <span className='border-b-2 border-black text-base font-normal hover:bg-black hover:text-white px-1 tran transition-all'><Link to={type} className='text-black'>CÒN NHIỀU LẮM, XEM THÊM</Link></span>
                    </div>
                </div>
            }
            <ToastContainer />
        </div>
    )
}
