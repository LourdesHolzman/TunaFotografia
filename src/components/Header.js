import React, {useContext} from 'react';
//import componentes
import Socials from './Socials';
import Logo from '../img/header/tuna.svg';
import MobileNav from './MobileNav';
//import link
import { Link } from 'react-router-dom';
//import cursor context
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (
  <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div className='flex flex-col  lg:flex-row lg:items-center w-full justify-between'>
      {/*logo*/}
      <Link 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        to={'/'} 
        className='max-w-[200px]'>
      <img className='w-auto h-20' src={Logo} alt='' />
      </Link>
      {/* nav - initially hidden - show on desktop mode */}
      <nav 
       className='hidden xl:flex gap-x-12 font-semibold'
       onMouseEnter={mouseEnterHandler}
       onMouseLeave={mouseLeaveHandler}>
        <Link 
        to={'/'} 
        className='text-[#696c6d] hover:text-primary trasition'>
          Inicio
        </Link>
        <Link 
        to={'/about'} 
        className='text-[#696c6d] hover:text-primary trasition'>
          Sobre mi
        </Link>
        <Link 
        to={'/portfolio'} 
        className='text-[#696c6d] hover:text-primary trasition'>
          Porfolio
        </Link>
        <Link 
        to={'/contact'} 
        className='text-[#696c6d] hover:text-primary trasition'>
          Contacto
        </Link>
      </nav>
    </div>
      {/* socials */}
      <Socials/>
      {/* mobile nav*/}
      <MobileNav/>
  </header>
  );
};

export default Header;
