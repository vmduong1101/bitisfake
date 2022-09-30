import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import { Button } from 'antd';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clear, increment, decrement, deleted } from './cartSlice';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { motion } from 'framer-motion'

export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state => state.cart))
    const total = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    const usd = Math.floor(total / 23770).toString()

    const handleOnChange = () => {

    }
    //Code React
    const handlePlus = (id) => {
        const product = cart.filter(item => item.id === id)
        if (product[0].quantity === 10) {
            return
        } else {
            dispatch(increment(id))
        }
    }
    const handleMinus = (id) => {
        const product = cart.filter(item => item.id === id)
        if (product[0].quantity === 1) {
            return
        } else {
            dispatch(decrement(id))
        }
    }
    var formatter = new Intl.NumberFormat('vi-VN',
        { style: 'currency', currency: 'VND' }
    );
    return (
        <motion.div className='bg-slate-100 z-50 mt-1 pb-28'
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <div className='pt-10'>
                <div className='flex justify-between mx-40 py-5 px-3 bg-white items-center rounded-xl'>
                    <p className='mb-0'>Tất cả sản phẩm</p>
                    <div className='w-3/4 flex justify-between pl-48'>
                        <p className='mb-0'>Đơn giá</p>
                        <p className='mb-0'>Số lượng</p>
                        <p className='mb-0'>Thành tiền</p>
                        <AiTwotoneDelete />
                    </div>
                </div>
            </div>
            <div>
                <div className='mx-40 mt-14'>
                    {cart && cart.map((item) => (
                        <div className='flex py-4 justify-between items-center px-3 bg-white' key={item.id}>
                            <div className='flex w-80 items-center'>
                                <img className='w-20 h-20' src={item.imgHome ? item.imgHome[0] : ''} />
                                <p className='ml-3 mb-0'>{item.name}</p>
                            </div>
                            <p className='mb-0 w-9'>{formatter.format(item.price)}</p>
                            <div className="group-input">
                                <button className="disable" onClick={() => handleMinus(item.id)}>
                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="" />
                                </button>
                                <input type="text" value={item.quantity} className="input" onChange={() => handleOnChange()} />
                                <button className="enable" onClick={() => handlePlus(item.id)}>
                                    <img src="	https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="" />
                                </button>
                            </div>
                            <p className='mb-0 w-9'>{formatter.format(item.price * item.quantity)}</p>
                            <AiTwotoneDelete onClick={() => dispatch(deleted(item.id))} className='cursor-pointer hover:text-cyan-400 w-8' />
                        </div>
                    ))}


                </div>
                <div className='text-right mx-40 mt-3 items-center'>
                    {cart && cart.length >= 1 ? (
                        <div className='flex w-96 gap-3'>
                            <h1 className='text-red-600 text-sm'>Tổng tiền: {formatter.format(total)}</h1>
                            <PayPalScriptProvider options={{ "client-id": "Aahy5yGsDzg5Ffri4PJmBb3TGDYXvInPMwPpIBaw4w4x9ssKJriZqbRepM1Wx9iOMv5a63h7abyg2e3q" }}>
                                <PayPalButtons style={{ layout: "horizontal" }}
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: usd,
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        console.log(actions)
                                        return actions.order.capture().then((details) => {
                                            const name = 'Võ Minh Đương';
                                            alert(`Giao dịch thành công bởi ${name}`);
                                            dispatch(clear())
                                        });
                                    }}
                                />
                            </PayPalScriptProvider>
                        </div>

                    ) : (
                        <img className='w-1/2 h-1/2 mx-auto' src='https://banner2.cleanpng.com/20180713/usk/kisspng-line-angle-empty-cart-5b48afa8c67d43.090968101531490216813.jpg' />
                    )}
                </div>
            </div>
        </motion.div>
    )
}