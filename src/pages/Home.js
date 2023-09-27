import React, {useContext} from 'react';
//import images
import inicioImg from '../img/portfolio/DSC01355.jpg';
//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';
//cursor context
import { CursorContext } from '../context/CursorContext';

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
  <motion.section 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={transition1}  
    className='section'>
    <div className='container mx-auto h-full relative'>
      {/* text - img wrapper */}
      <div className='flex flex-col justify-center'>
        {/* text */}
        <motion.div 
          initial={{opacity:0, y:'-50%'}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:'-50%'}}
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'> 
            Fotografía 
          </h1>
          <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
            registrando momentos
          </p>
          <Link to={'/contact'} className='btn mb-[30px]'>contactame</Link>
        </motion.div>
        {/* image */}
        <motion.div 
          initial={{scale:0}}
          animate={{scale:1}}
          exit={{scale:0}}
          transition={transition1}
          className=''>
          <div className=' flex justify-around '>
            <motion.img 
            whileHover={{scale:1.1}} 
            transition={transition1}
            src={inicioImg} alt=''/>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>
  );
};

export default Home;
