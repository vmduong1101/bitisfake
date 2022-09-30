import React from 'react'
import Man from '../../Common/Man'
import Stage from '../../Common/Stage'
import { motion } from 'framer-motion'

export default function Gentlemen() {

    return (
        <motion.div className='mt-5'
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}>
            <div className='px-28 bg-gray-200 py-1'>
                <span>Trang chủ / Danh mục / NAM</span>
            </div>
            <img src='https://file.hstatic.net/1000230642/collection/web_banner___phien_ban_40_nam_dcc89c653e48402e9d9b5d22b29612b9.png' alt='' />
            <Stage />
            <Man page={true} />
        </motion.div>
    )
}
