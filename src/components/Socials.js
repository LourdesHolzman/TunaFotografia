import React, {useContext} from 'react';
//import icons
import {
  ImFacebook,
  ImInstagram,
} from 'react-icons/im';
//import cursor context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext (CursorContext);
  return (
  <div 
  onMouseEnter={mouseEnterHandler}
  onMouseLeave={mouseLeaveHandler}
  className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='https://www.facebook.com/tunafoto/' target='_blank'>
        <ImFacebook/>
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/tuna_foto/' target='_blank'>
        <ImInstagram/>
        </a>
      </li>
    </ul>
  </div>
  );
};

export default Socials;
