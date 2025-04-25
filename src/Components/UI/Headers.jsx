import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Headers = () => {


  const [show, setShow] = useState(false)

  const handleButtonToggle = () => {
    return setShow(!show)
  }

  const handleLinkClick = () => {
    return setShow(false)
  }
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>
          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
              </li>
              <li>
                <NavLink to="About" onClick={handleLinkClick}>About</NavLink>
              </li>
              <li>
                <NavLink to="Country" onClick={handleLinkClick}>Country</NavLink>
              </li>
              <li>
                <NavLink to="Contact" onClick={handleLinkClick}>Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu/>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
