import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './Navbar.css'
import LOGO from "../../asset/logo-light.4fb0dd87.svg"

class Navbar extends Component {
   render() {
      return(
         <nav className="NavbarItems">
               <h1 className="navbar-logo">
                  <img src={ LOGO } />
               </h1>
               <div className="menu-icon">
                  
               </div>
               <ul className='nav-menu'>
                  {MenuItems.map((item, index) => {
                     return (
                        <li key={index}>
                           <a className={item.cName} href={item.url}>
                              {item.tittle}
                           </a>
                        </li>
                     )
                  })}
               </ul>
               <Button>+ Add New Task</Button>
         </nav>
      )   
   }

}

export default Navbar