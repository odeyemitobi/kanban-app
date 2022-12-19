import React, { useEffect, useState } from "react";
import { MenuItems } from "../../utilis/MenuItems";
import { Button } from "../Button/Button";
import "./Navbar.css";
import { SidebarData } from "../../utilis/SidebarData";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar({ children }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [title, setTitle] = useState("");
  const location = useLocation();
  const [path, setPath] = useState();

  useEffect(() => {
    SidebarData.map((item) => {
      if (item.path === location.pathname) {
        setTitle(item.title);
      }
    });
  }, []);

  return (
    <>
      <section className="">
        <nav className="NavbarItems">

          <div className="menu-icon">{title}</div>
          <ul className="nav-menu">
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <Button>+ Add New Task</Button>
        </nav>
        <nav className={sidebar ? "nav-menu2 active" : "nav-menu2"}>
          <ul className="nav-menu-items">
            <li className="navbar-board">
              <div to="#" className="board-bars">
                <h4>ALL BOARDS (3)</h4>
              </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="main-content">
          <div className="content">{children}</div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
