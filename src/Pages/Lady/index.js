import React from 'react'
import Girl from '../../Common/Girl'
import Stage from '../../Common/Stage'
import { motion } from 'framer-motion'
export default function Lady() {

    return (
        <motion.div className='mt-5'
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <div className='px-28 bg-gray-200 py-1'>
                <span>Trang chủ / Danh mục / NỮ</span>
            </div>
            <img src='https://file.hstatic.net/1000230642/collection/z3601683254313_2ea6f558521cb1e7abe0f8f2e217fe50_0648a9ebc1964ba79b8c5bffaaf14fd2.jpg' alt='' />
            <Stage />
            <Girl page={true} />
        </motion.div>
    )
}
