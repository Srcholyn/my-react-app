import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import './Navbar.css';
import tsclogo from './TSC-logo-white.png';

function Navbar() {
  const [stickyClass, setStickyClass] = useState('');
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  return (
    <div className={`header ${stickyClass}`}>
        <div className='container'>
        <a href='/'>
          <img alt = 'Link to' src= {tsclogo} height={100} width={150}/>
        </a>
          <div className='tsc'>Thai Space Consortium</div>
          <div className='line'></div>
          <div className='header-con'>
                <ul className='menu'>
                    <li className='menu-link'>
                        <a href='Mission'>Mission</a>
                    </li>
                    <li className='menu-link'>
                        <a href='Project_timeline'>Project timeline</a>
                    </li>
                    <li className='menu-link'>
                        <a href='Organization_chart'>Organization chart</a>
                    </li>
                    <li className='menu-link'>
                        <a href='News'>News</a>
                    </li>
                    <li className='menu-link'>
                        <a href='RnD_project'>R&D project</a>
                    </li>
                    <li className='menu-link'>
                        <a href='Co_operative'>Co-operative</a>
                    </li>
                    <li className='menu-link'>
                        <a href='Careers'>Careers</a>
                    </li>
                    <li className='menu-link'>
                        <a href='Contact'>Contact</a>
                    </li>
                </ul>
            </div>
            <div className='mobile-menu' onClick={handleClick}>
            {click ? (
                <FiX />
            ) : (
                <FiMenu />
            )
            }
            </div>
        </div>
    </div>
  )
}


export default Navbar;