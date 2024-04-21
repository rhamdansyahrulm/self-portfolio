import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import React , { useState } from 'react'
import MobileNav from "./MobileNav";

interface Props {
  nav: boolean;
  openNav: () => void;
  closeNav: () => void;
}

const Nav = ({ openNav, closeNav }: Props) => {
  const [nav, setNav] = useState(false);

  const handleOpenNav = () => setNav(true);
  const handleCloseNav = () => setNav(false);

  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className='w-[100%] fixed z-[10000] top-0 h-[8vh] bg-[#141c27] opacity-80 shadow-md'>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold text-base md:text-2xl'>
          Personal
          <span className='text-yellow-300'> Portfolio</span>
        </h1>
        <div className="nav-link">HOME</div>
        <div className="nav-link">SERVICES</div>
        <div className="nav-link">ABOUT</div>
        <div className="nav-link">PROJECT</div>
        <div className="nav-link">BLOG</div>
        <div className="nav-link">CONTACT</div>
        {nav ? (
          <div onClick={handleCloseNav}>
            <div onClick={closeNav}>
            <XMarkIcon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-white" />
            
          </div>
          </div>
        ) : (
          <div onClick={handleOpenNav}>
            <div onClick={openNav}>
            <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-white" />
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;