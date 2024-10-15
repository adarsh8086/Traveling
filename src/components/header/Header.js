


import React, { useState, useEffect } from 'react';
import './Header.css';
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from 'react-router-dom';



const Header = () => {
  
  const [active, setActive] = useState("menu");
  const [transparent, setTransparent] = useState("Navbar");

  const showNavBar = () => {
    setActive("menu showMenu");
  };

  const removeShowNavBar = () => {
    setActive("menu"); 
  };

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('Navbar activeHeader');
    } else {
      setTransparent("Navbar");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", addBg);
    return () => {
      window.removeEventListener("scroll", addBg);
    };
  }, []);

  return (
    <div className={transparent}>
      <div className='logoDiv'>
        <h2 className='logo'>Yango</h2>
      </div>

      <div className={active}>
        <div className='lists flex'>

          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/destinations'>Destinations</Link>
          </li>

          <li>
            <Link to='/hotels'>Hotels</Link>
          </li>

          <li>
            <Link to='/categories'>Services</Link>
          </li>

          <li>
            <Link to='/bookings'>Bookings</Link>
          </li>
          
        </div>
        
        <div className='btns flex'>
          <select className='lang'>
            <option value="">EN</option>
            <option value="">FR</option>
            <option value="">SP</option>
          </select>
        </div>
        <div className='closeIcon' onClick={removeShowNavBar}>
          <AiFillCloseCircle className='icon' />
        </div>
      </div>
      <div className='toggleIcon' onClick={showNavBar}>
        <TbGridDots className='icon' />
      </div>
    </div>
  );
}

export default Header;













