import React from 'react'
import { motion } from 'framer-motion'


export default function Square() {
    return (
        <motion.div className='w-96 h-96 bg-blue-500 rounded-xl' whileInView={{ x: 200, rotate: 90 }} initial={{ x: -200, rotate: 0 }} transition={{ duration: 3 }}>

        </motion.div>
    )
}
