import React, { useContext } from "react";
//import icons
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
//import cursor context
import { CursorContext } from "../context/CursorContext";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.facebook.com/tunafoto/" target="_blank">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/tuna_foto/" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://wa.me/+542954545210" target="_blank">
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
