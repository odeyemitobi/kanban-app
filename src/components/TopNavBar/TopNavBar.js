import { Popover } from "antd";
import React, { useRef, useState } from "react";
import { Button } from "../Button/Button";
import "./TopNavBar.css";

const TopNavBar = ({ handleClick, title }) => {
  const [open, setOpen] = useState(false);
  const mobileMenuBtn = useRef(null);
  const handleToggle = () => {
    handleClick();
  };

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <nav className="z-10 fixed top-nav-bar md:left-[19rem] right-0 bg-[#2b2c37] left-0">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between">
          <div className="flex space-x-4 w-full hidden md:flex ">
            <div className="relative flex w-full flex-wrap">
              <div className="font-[600] text-white text-center text-[1.5rem] m-0 flex items-center">
                {title}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <a href="#/" className="py-2 px-3">
              <Button>+ Add New Task</Button>
            </a>
          </div>
          <Popover
            content={
              <div className="w-[120px] px-6 py-3 bg-[#20212c]">
                <div>
                  <a className="text-[12px] text-[#828fA3] font-[500]" onClick={hide}>Edit Board</a>
                </div>
                <div className="mt-4">
                  <a className="text-[12px] text-[red] font-[500]" onClick={hide}>Delete Board</a>
                </div>
              </div>
            }
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <div type="primary" className="flex items-center cursor-pointer nav-area">
              <svg
                className="fill-medium-grey"
                width="5"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fillRule="evenodd">  
                    <circle cx="2.308" cy="2.308" r="2.308"></circle>
                    <circle cx="2.308" cy="10" r="2.308"></circle>
                    <circle cx="2.308" cy="17.692" r="2.308"></circle>  
                </g>
              </svg>
            </div>
          </Popover>

          <div className="md:hidden flex items-center">
            <button
              ref={mobileMenuBtn}
              onClick={handleToggle}
              className="mobile-menu-button"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
