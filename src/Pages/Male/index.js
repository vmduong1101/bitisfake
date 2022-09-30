import React from 'react'
import Boy from '../../Common/Boy'
import Stage from '../../Common/Stage'
import { motion } from 'framer-motion'

export default function Male() {

    return (
        <motion.div className='mt-5'
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <div className='px-28 bg-gray-200 py-1'>
                <span>Trang chủ / Danh mục / Bé Trai</span>
            </div>
            <img src='https://theme.hstatic.net/1000230642/1000904695/14/collection_banner.jpg?v=825' alt='' />
            <Stage />
            <Boy page={true} />
        </motion.div>
    )
}
