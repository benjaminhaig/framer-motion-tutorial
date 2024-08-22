import React from 'react'
import { motion } from 'framer-motion'


export default function Circle() {
    return (
        <motion.div className='w-96 h-96 bg-red-500 rounded-full' drag dragConstraints={{ left: -400, right: 400 }} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>

        </motion.div>
    )
}
