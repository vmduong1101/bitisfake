import React from 'react'
import Daughter from '../../Common/Daughter'
import Stage from '../../Common/Stage'
import { motion } from 'framer-motion'

export default function Female() {

    return (
        <motion.div className='mt-5'
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <div className='px-28 bg-gray-200 py-1'>
                <span>Trang chủ / Danh mục / Bé Gái</span>
            </div>
            <img src='https://file.hstatic.net/1000230642/collection/banner-kid_223562b12bba4152b30467eee5a308fb.jpg' alt='' />
            <Stage />
            <Daughter page={true} />
        </motion.div>
    )
}
