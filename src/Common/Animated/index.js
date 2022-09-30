import React from 'react'
import Cart from '../../Pages/Cart'
import Detail from '../../Pages/Detail'
import Female from '../../Pages/Female'
import Gentlemen from '../../Pages/Gentlemen'
import Home from '../../Pages/Home'
import Lady from '../../Pages/Lady'
import Male from '../../Pages/Male'
import { Routes, Route, useLocation } from 'react-router-dom'
import { products } from '../../Products'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from '../ScrollToTop'
import Login from '../../Pages/Login'


function Animated() {
    const location = useLocation()

    return (
        <div>
            <ScrollToTop>
                <AnimatePresence>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<Home />} />
                        <Route path='/nam' element={<Gentlemen />} />
                        <Route path='/nu' element={<Lady />} />
                        <Route path='/male' element={<Male />} />
                        <Route path='/female' element={<Female />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/detail/:id' element={<Detail products={products} />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </AnimatePresence>
            </ScrollToTop>
        </div>
    )
}

export default Animated
