import React, { useRef, useState } from "react";
import placeholder from "../../asset/icon/placeholder.svg";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import MenuButton from "../../components/MenuButton/MenuButton";
import "./Layout.css";

const Layout = ({ children }) => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const sideBar = useRef(null);
  const handleClick = () => {
    if (!showBackdrop) {
      document.body.style.overflow = "hidden";
      setShowBackdrop(true);
    }
    sideBar.current?.classList.toggle("-translate-x-full");
  };

  const handleBackdropClick = () => {
    document.body.style.overflow = "auto";
    setShowBackdrop(false);
    sideBar.current?.classList.toggle("-translate-x-full");
  };
  const menu = [
    {
      name: "Platform Launch",
      logo: placeholder,
      link: "/",
    },
    {
      name: "Marketing Plan",
      logo: placeholder,
      link: "/marketing",
    },
    {
      name: "Roadmap",
      logo: placeholder,
      link: "/roadmap",
    },
    {
      name: "+ Create New Board",
      logo: placeholder,
      link: "/create",
    },
  ];

  return (
    <>
      {showBackdrop && (
        <div onClick={handleBackdropClick} className="backdrop z-20"></div>
      )}
      <div className="relative min-h-screen md:flex">
        <div
          ref={sideBar}
          className="fixed z-20 border-r border-[#3e3f4e] text-blue-100 w-[19rem] space-y-10 py-10 pr-10 absolute inset-y-0 left-0 transform -translate-x-full md:fixed md:translate-x-0 transition duration-200 ease-in-out bg-[#2b2c37]"
        >
          <a
            href="https://facebook.com"
            className="w-full flex items-center ml-4"
          >
            <img src={placeholder} alt="" />
          </a>
          <nav>
            <div className="ml-4 my-4 text-[#828fA3] text-[.75rem] font-[700]">ALL BOARDS (3)</div>
            {menu.map((m) => (
              <MenuButton
                key={m.logo}
                name={m.name}
                logo={m.logo}
                link={m.link}
              />
            ))}
          </nav>
        </div>
        <div className="flex-1 md:ml-[19rem]">
          <TopNavBar handleClick={handleClick} />
          <div className="pt-24 pb-10 bg-[#20212c]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
