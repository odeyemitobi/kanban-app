import React, { useEffect, useState } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import './Navbar.css';
import { SidebarData } from '../SidebarData';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LOGO from "../../asset/logo-light.4fb0dd87.svg"

function Navbar() {
   const [sidebar, setSidebar] = useState(false);

   const showSidebar = () => setSidebar(!sidebar);
   const [title, setTitle] = useState("")
   const location = useLocation();
   const [path, setPath] = useState();

   useEffect(() => {
      console.log(location);
      SidebarData.map(item => {
         if(item.path === location.pathname) {
            setTitle(item.title)
         }
      })
   }, [])

   return(
      <>   
         <nav className="NavbarItems">
            <h1 className="navbar-logo">
               <img src={ LOGO } alt='logo' onClick={showSidebar}/>
            </h1>
            
            <div className="menu-icon">
               {title}
            </div>
            <ul className='nav-menu'>
               {MenuItems.map((item, index) => {
                  return (
                     <li key={index}>
                        <a className={item.cName} href={item.url}>
                           {item.title}
                        </a>
                     </li>
                  )
               })}
            </ul>
            <Button>+ Add New Task</Button>
         </nav>
         <nav className={sidebar ? 'nav-menu2 active' : 'nav-menu2'}>
            <ul className='nav-menu-items'>
               <li className='navbar-board'>
                  <div to='#' className='board-bars'>
                     <h4>ALL BOARDS (3)</h4>
                  </div>
               </li>
               {SidebarData.map((item, index) => {
                  return(
                     <li key={index} className={item.cName}>
                        <NavLink to={item.path}>
                           {item.icon}
                           <span>{item.title}</span>
                        </NavLink>
                     </li>
                  )
               })}
            </ul>
         </nav>
      </>
         
   );   
}

export default Navbar;