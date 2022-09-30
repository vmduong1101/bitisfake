import React, { useState } from 'react'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import { GrFormClose } from "react-icons/gr";
import { useSelector } from 'react-redux';

export default function Header({ products }) {

    const cart = useSelector(state => state.cart)
    const [valueSearch, setValueSearch] = useState('')
    const [appear, setAppear] = useState(false)

    var formatter = new Intl.NumberFormat('vi-VN',
        { style: 'currency', currency: 'VND' }
    );
    const handleChangeSearch = (e) => {
        const data = e.target.value
        setValueSearch(data)
        setAppear(true)
        if (data == '') {
            setAppear(false)
        }
    }

    const handleCloseGroup = (e) => {
        setAppear(false)
    }
    return (
        <div className='flex justify-between items-center mx-24 h-20 bg-white'>
            <Link to='/'>
                <div className='flex relative'>
                    <img src={logo} style={{ width: '100px', height: '90px' }} className='bg-black' />
                    <div className='text absolute top-1/2 -translate-y-50% -translate-x-50% left-1/2'>
                        <span>VoMinhDuong</span>
                    </div>
                </div>
            </Link>
            <div>
                <ul className='s nav flex uppercase w-600px justify-between items-center mb-0'>
                    <li className='relative cursor-pointer '>
                        <a className='text-black text-lg ali'>Về chúng tôi</a>
                    </li>
                    <li className='relative cursor-pointer'>
                        <Link to='/nam' className='text-black text-lg ali'>Nam</Link>
                        <ul className='cate list-none normal-case absolute hidden shadow-md top-12 z-10 bg-white text-base'>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/nam' className='text-black'>Hunter</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/nam' className='text-black'>Sandal</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/nam' className='text-black'>Giày thể thao</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/nam' className='text-black'>Giày đá banh</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/nam' className='text-black'>Giày tây</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/nam' className='text-black'>Dép</Link>
                            </li>
                        </ul>

                    </li>
                    <li className='relative cursor-pointer'>
                        <Link to='/nu' className='text-black text-lg ali'>Nữ</Link>
                        <ul className='cate list-none normal-case absolute shadow-md top-12 hidden z-10 bg-white text-base'>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/nu' className='text-black'>Hunter</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/nu' className='text-black'>Sandal</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/nu' className='text-black'>Giày thời trang</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/nu' className='text-black'>Giày thể thao nữ</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/nu' className='text-black'>Túi xách</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/nu' className='text-black'>Dép</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='relative cursor-pointer'>
                        <Link to='/male' className='text-black text-lg ali'>Bé Trai</Link>
                        <ul className='cate list-none normal-case absolute shadow-md top-12 hidden z-10 bg-white text-base'>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/male' className='text-black'>Sandal</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/male' className='text-black'>Giày thể thao</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/male' className='text-black'>Giày tập đi</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/male' className='text-black'>Dép</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='relative cursor-pointer'>
                        <Link to='/female' className='text-black text-lg ali'>Bé Gái</Link>
                        <ul className='cate list-none normal-case absolute shadow-md top-12 hidden z-10 bg-white text-base'>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/female' className='text-black'>Sandal</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/female' className='text-black'>Giày thể thao</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/female' className='text-black'>Giày bép bê</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/female' className='text-black'>Giày tập đi</Link>
                            </li>
                            <li className='border-b py-2 px-4 min-w-240px opacity-75 hover:opacity-100'>
                                <Link to='/female' className='text-black'>Dép</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='relative cursor-pointer'>
                        <a className='text-black text-lg ali'>TUYỂN DỤNG</a>
                    </li>
                </ul>
            </div>
            <div className='flex'>
                <div className='search flex relative items-center'>
                    <div className='absolute left-3'>
                        <lord-icon
                            src="https://cdn.lordicon.com/zniqnylq.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#4030e8"
                            style={{ width: '25px', height: '25px' }}>
                        </lord-icon>
                    </div>
                    <input className='h-8 bg-slate-200 outline-none px-10 text-sm font-normal' placeholder='Bạn cần tìm gì...' onChange={(e) => handleChangeSearch(e)} />
                    <div className={appear ? 'absolute bg-white z-50 searchProduct appear' : 'absolute bg-white z-50 searchProduct'}>
                        {products.filter(item => item.name.search(valueSearch) >= 0).length > 0 ?
                            <div>
                                <GrFormClose className='float-right text-2xl ml-1 cursor-pointer' onClick={handleCloseGroup} />
                                <div className='searchItems mt-2'>
                                    {products && products.filter(item => item.name.search(valueSearch) >= 0).map((item, index) => (
                                        <Link to={`/detail/${item.id}`} key={index}>
                                            <div className='flex items-center searchItem text-black'>
                                                <img className='w-12' src={item.imgHome[0]} />
                                                <div className='ml-3'>
                                                    <p className='mb-0'>{item.name}</p>
                                                    <p className='mb-0'>{formatter.format(item.price)}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                {products.filter(item => item.name.includes(valueSearch)).length > 4 &&

                                    <div className='text-center p-2 text-15px cursor-pointer hover:text-blue-500'>
                                        <span>Xem thêm sản {products.filter(item => item.name.includes(valueSearch)).length - 4} phẩm</span>
                                    </div>
                                }
                            </div>
                            :
                            <h6 className='text-center p-3'>Không tìm thấy sản phẩm nào</h6>
                        }
                    </div>
                </div>
                <div className='icon flex ml-4'>
                    <div className='user cursor-pointer'>
                        <Link to='login'>
                            <lord-icon
                                src="https://cdn.lordicon.com/ljvjsnvh.json"
                                trigger="hover"
                                style={{ width: '40px', height: '40px' }}>
                            </lord-icon>
                        </Link>
                    </div>
                    <div className='heard cursor-pointer'>
                        <lord-icon
                            src="https://cdn.lordicon.com/ytuosppc.json"
                            trigger="hover"
                            style={{ width: '40px', height: '40px', margin: '0px 10px' }}>
                        </lord-icon>
                    </div>
                    <Link to='/cart'>
                        <div className='cart relative cursor-pointer'>
                            <lord-icon
                                src="https://cdn.lordicon.com/lpddubrl.json"
                                trigger="hover"
                                style={{ width: '40px', height: '40px' }}>
                            </lord-icon>
                            <div className='cartQuantity'>{cart.length}</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
