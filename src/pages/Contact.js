import React, { useContext } from 'react';
//import images
import WomanImg from '../img/contact/woman.png';
//import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';
//import context
import { CursorContext } from '../context/CursorContext';

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section 
    initial={{opacity:0, y:'100%'}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:'100%'}}
    transition={transition1}  
    className='section bg-white'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-center'>
          {/* bg */}
          <motion.div 
          initial={{opacity:0, y:'100%'}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:'100%'}}
          transition={transition1}
          className='hidden lg:flex  absolute bottom-0 left-0 right-0 top-72 -z-10 '>
          </motion.div>
          {/* text & from */}
          <div 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1 lg:pt-30 px-4 lg:m-60'>
            <h1 className='h1 '>Contactame</h1>
            <p>Llena tu albúm de recuerdos. ¡Escribime!</p>
           
            <form className='flex flex-col gap-y-4 '>
            <div className='flex gap-x-10'>
              <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Nombre' />
              <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Email' />
            </div>
            <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Mensaje' />
            <button className='btn mb-[30px] mx-auto lg:mx-0 self-end'>Enviar</button>
            </form>
          </div>
          {/* image 
          <motion.div 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          initial={{opacity:0, y:'100%'}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:'100%'}}
          transition={{transition1: transition1, duration:1.5}}
          className='lg:flex-1'>
            <img src={WomanImg} alt='' />
           
          </motion.div>*/}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
