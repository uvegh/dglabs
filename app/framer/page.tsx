"use client"
import {motion,AnimatePresence, useScroll} from "framer-motion" 
import {useState} from "react"
import Image from "next/image"
import Box from "../components/Box"

 export default function Framer() {
    const [show,setShow]=useState <Event[]| boolean>(true)
    const [showCard,setShowCard]=useState<Event[]|boolean> (false)
    const{scrollYProgress}=useScroll()
return(
 <>

 
 <motion.div className="bg-blue left-0 fixed right-0 top-0 min-h-[200%]"
    style={{
        scaleX:scrollYProgress,
        transformOrigin:"0%"
       
    }}
    >
uuuuuuuuu
        
    </motion.div>

{/* scroll animation trigger */}

<motion.div className="flex flex-col align-middle"
initial={{ opacity:0,scale:0}}
whileInView={{opacity:1,scale:1}}
transition={{ duration:1}}

>

  <Box/>
  <Box/>
  <Box/>
</motion.div>

  {/* frmaer motion tutorial start */}
  <AnimatePresence>
    {show&&(
   <motion.section className=" max-w-screen-xl ">
           <div className="lg:grid lg:grid-cols-2 lg:grid-flow-col sm:flex  sm:flex-col-reverse md:flex  md:flex-col-reverse ">
             <motion.div
               initial={{x: 0,opacity:-1000}}
               animate={{ opacity:1,x:50}}
               transition={{duration: 1}}
               exit={{opacity:0,x:-150}}
       drag
       dragConstraints={{left:0,right:100,top:-100}}

               className="col mt-12 "
             >
               <section>
             <Image
               alt="icon"
               src="/icon4.png"
               className=" cursor-pointer object-fit hover:rotate-180 transition-all ease-in-out"
               width="48"
               height="48"
             />
             <h1 className="font-bold text-xl text-slate-900 mt-5">
               Easier Integrations
             </h1>
             <p className="textGray font-normal mt-5 minHeight ">
               Completely pursue scalable customer try through potentialities.
               Pontificate portals installed. Efficiently unleash information.{" "}
             </p>
           </section>
             </motion.div>
 
           
           </div>
         </motion.section>
   )}
 
 </AnimatePresence>
 
 <button className="bg-slate-400 rounded px-4 py-2"
 onClick={()=>{
 setShow(!show)
 }}>Remove box</button>  
 




 
 {/* framer motion tutorial end */}
 
<div className="flex align-middle h-[100%] bg-gray-300 justify-center">
    <motion.div className="bg-white px-6 py-4 shadow-[10] "
    whileHover={{
        scale:1.1
        

    }}

    transition={{
        layout:{
            duration:0.5,
            type:"spring"
        }
    }}
    layout
    onClick={()=>{
setShowCard(prev=>!prev)
    }}
    >
        <motion.h3>
            Hover or Click
        </motion.h3>
{
    showCard&&(
        <motion.p className="w-[600px] bg-blue-500 rounded-md outline p-5 text-slate-200"
        initial={{opacity:0 }}
        transition={{
            delay:0.3,
            duration:1
        }}
        animate={{opacity:1, x:[0,2,0,0,2],
    
        }}
        >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nisi earum autem recusandae sunt ratione,
 quas voluptatum dolorem cum dolorum veritatis? Odit dolorem eius, officia tenetur adipisci veritatis suscipit 
 maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque atque quidem distinctio.
  Corrupti rerum praesentium optio similique consectetur reiciendis non illum. Distinctio, repudiandae explicabo ad
   voluptatem quo repellendus saepe.
        </motion.p>
    )
}
    </motion.div>
    
    </div>


    {/* scroll animation */}

   
 </>



)


}