import React, { useContext } from "react";
//import images
import Image1 from "../img/portfolio/DSC_0670.jpg";
import Image2 from "../img/portfolio/DSC_0099.jpg";
import Image3 from "../img/portfolio/DSC_0143.jpg";
import Image4 from "../img/portfolio/DSC_0270.jpg";
//import link
import { Link } from "react-router-dom";
//import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transitions";
//import context
import { CursorContext } from "../context/CursorContext";
import { AboutLinks } from "../components/AboutLinks";

const Premama = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col m-10  lg:items-start"
          >
            <h1 className="h1 lg:mt-20"> EMBARAZO </h1>

            {/* nav - initially hidden - show on desktop mode */}
            <nav
              className="flex sm:justify-center m-2 space-x-4"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <AboutLinks />
            </nav>

            <p className="mb-12 mt-2 max-w-sm">
              Para este momento tan especial que estan viviendo les propongo una
              sesión de fotos en exterior, con la naturaleza.
              <br />
              Tu pareja e hijos están invitados a participar en las fotos.
              <br />
              Se recomienda hacer las fotos entre la semana 28 y la 34.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Contactame
            </Link>
          </motion.div>

          {/* image grid */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="grid grid-cols-4 lg:gap-2 mt-20 xs:gap-2"
          >
            {/* image */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image3}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Premama;
