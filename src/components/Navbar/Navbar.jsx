import React from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import './navbar.scss'; 

const Navbar = () => {
  return (
    <div>
      <section className='navBarSection'>
        <header className='header flex'>
          <div className='logoDiv'>
            <a href="#" className='logo flex'>
              <h1><MdOutlineTravelExplore className="icon" /> Travel.</h1>
            </a>
          </div>
          <div className='navBar'>
            <ul className='navLists flex'>
              <li className='navItem'>
                <a href="#" className='navLink'>Home</a>
              </li>
              <li className='navItem'>
                <a href="#" className='navLink'>Packages</a>
              </li>
              <li className='navItem'>
                <a href="#" className='navLink'>Shop</a>
              </li>
              <li className='navItem'>
                <a href="#" className='navLink'>About</a>
              </li>
              <li className='navItem'>
                <a href="#" className='navLink'>Pages</a>
              </li>
              <li className='navItem'>
                <a href="#" className='navLink'>News</a>
              </li>
              <li className='navItem'>
                <a href="#" className='navLink'>Contact</a>
              </li>
              <button className='btn'>
                <a href="#">Book Now</a>
              </button>
            </ul>
            <div className='closeNavbar'>
              <IoIosCloseCircle className='icon' />
            </div>
            </div>
            <div className='toggleNavbar'>
              <TbGridDots />
            
          </div>
        </header>
      </section>
    </div>
  );
};

export default Navbar;
