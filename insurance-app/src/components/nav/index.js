import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from'react-icons/ai';
import { SidebarData } from './sidebarData';

import './styles.scss';
function Nav() {
    const classname = 'navigation-bar';
    const [sidebarActive, setsidebarActive] = useState(false);

    const navBarClick = (e) => {
      e.preventDefault();
      console.log('clicked')
      setsidebarActive(!sidebarActive);
    }

  return (
   <>
    <div className={classname}>
        <Link to='#' className={`${classname}-menu`}>
            <FaBars  onClick={navBarClick}/>
        </Link>
        <div  className={`${classname}-heading`}>
          <h1>
            Insurance Client
          </h1>
          <div className={`${classname}-heading-nav`}>
        {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
        </div>
        </div>
    </div>
    <nav className={`${classname}--sidebar mobile ${sidebarActive ? 'active' : ''}`}>
      <ul className={`${classname}--sidebar-menu-items`}>
        <li className={`${classname}-navbar-close`}>
          <AiOutlineClose onClick={navBarClick}/>
        </li>
        {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
      </ul>
    </nav>
   </>
  )
}

export default Nav;