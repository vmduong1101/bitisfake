import React from 'react'
import Banner from '../../Common/Banner'
import BorderBottom from '../../Common/BannerBottom'
import Boy from '../../Common/Boy'
import Daughter from '../../Common/Daughter'
import Girl from '../../Common/Girl'
import Man from '../../Common/Man'
import News from '../../Common/News'
import SlideShow from '../../Common/Slider'
import Stage from '../../Common/Stage'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <motion.div
            className='home'
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <SlideShow />
            <Stage />
            <Banner />
            <Man />
            <Girl />
            <Daughter />
            <Boy />
            <BorderBottom />
            <News />
        </motion.div>
    )
}
