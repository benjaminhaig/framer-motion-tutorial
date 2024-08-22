import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Triangle() {
    const [toggle, setToggle] = useState(false);

    const variants = {
        green: {
            rotate: 0,
            scale: 1
        },
        purple: {
            rotate: 180,
            scale: 1.1
        }
    }
    return (
        <motion.div
            onClick={() => setToggle(!toggle)}
            className={`w-0 h-0 border-l-[200px] border-l-transparent border-r-[200px] border-r-transparent border-b-[300px] ${toggle ? 'border-b-purple-500' : 'border-b-green-500'}`}
            variants={variants}
            animate={toggle ? 'purple' : 'green'}>
        </motion.div>
    );
}