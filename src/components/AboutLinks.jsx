import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const ACTIVE_LINK = "active-about-link";

export function AboutLinks() {
  return (
    <Fragment>
      <NavLink
        to={"/premama"}
        className={({ isActive }) =>
          `${isActive && ACTIVE_LINK} text-[#696c6d] hover:text-primary trasition`
        }
      >
        EMBARAZO
      </NavLink>
      <NavLink
        to={"/infantil"}
        className={({ isActive }) =>
          `${isActive && ACTIVE_LINK} text-[#696c6d] hover:text-primary trasition`
        }
      >
        INFANTIL
      </NavLink>
      <NavLink
        to={"/familia"}
        className={({ isActive }) =>
          `${isActive && ACTIVE_LINK} text-[#696c6d] hover:text-primary trasition`
        }
      >
        FAMILIA
      </NavLink>
      <NavLink
        to={"/eventos"}
        className={({ isActive }) =>
          `${isActive && ACTIVE_LINK} text-[#696c6d] hover:text-primary trasition`
        }
      >
        EVENTOS
      </NavLink>
      <NavLink
        to={"/otros"}
        className={({ isActive }) =>
          `${isActive && ACTIVE_LINK} text-[#696c6d] hover:text-primary trasition`
        }
      >
        OTROS
      </NavLink>
    </Fragment>
  );
}
