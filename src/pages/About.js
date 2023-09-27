import React, {useContext} from 'react';
//import images
import inicioImg from '../img/about/luppe.jpg'
//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';
//import cursor context
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext (CursorContext);
  return (
    <motion.section 
    initial={{opacity:0, y:'100%'}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:'100%'}}
    transition={transition1}
    className='section'>
      <div 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container mx-auto h-full relative'>
        {/* text - img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* image */}
          <div className='flex-1 mt-20 ml-20 lg:max-h-96 order-2 lg:order-none overflow-hidden'>
            <img src={inicioImg} alt=''/>
          </div>
          {/* text */}
          <motion.div 
          initial={{opacity:0, y:'-80%'}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:'-80%'}}
          transition={transition1}          
          className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1 lg:mt-20'>Sobre mí</h1>
          
          <p className='mb-12 max-w-sm'>
          ¡Hola! Soy Lupe. Estudié Audiovisuales.
          Me gusta captar, capturar, lo natural y simple de los momentos.
          <br/>
          <br/>
          <b>TUNA</b> representa la creación de infinitos recuerdos de una forma simple y natural. 
          </p>
          <Link to={'/portfolio'} className='btn'>Registros</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
