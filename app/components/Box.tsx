import React from 'react'
import {motion} from 'framer-motion'


function Box() {
  return (
    <motion.div className="mx-[200px] my-[200px] h-[100px] w-[30%] bg-sky-500"
    initial={{opacity:0,scale:0, x:500}}
    whileInView={{opacity:1,scale:1,x:0}}
    transition={{duration:0.6}}
    viewport={{once:true}}
    >


    </motion.div>
  )
}

export default Box