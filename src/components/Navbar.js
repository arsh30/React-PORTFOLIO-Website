import "./navbarStyle.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      // 100px
      setColor(true);
    }else{
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);
  // ye above line -> isliye diya bcause hum chahte hai, ki jb scroll kre toh color change
  // hojaye

  return (
    <nav className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>

      {/* Now creat NAV LINKS WHICH IS INSIDE Unorder list */}
      <ul className={click ? "nav-menu active" : "nav-menu" } >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/project">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {
          click ?  (<FaTimes size={20} style={{ color: 'white' }} />)  :
            (<FaBars size={20} style={{ color: 'white' }} />) 
        }
      </div>
    </nav>
  );
};
// initally menu is hidden for small devices but agr uspr koi click krta hai
// initially hamrburger will be hidden agr hamburger menu pr click krta hai toh hi dikhna
// chaiye, so we use state hook taki toggle kar ske icon ki state ko

// so -> hamburger menu class pr click krege toh handleClick function run krega 
// udr toggle karre hai, click ko bydefault false hai means cross dikhana hai

export default Navbar;
