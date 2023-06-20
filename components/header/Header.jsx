import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import NavLink from './NavLink'
import { ImBooks } from 'react-icons/im'
import {BiChevronDown} from 'react-icons/bi'
import Link from 'next/link'
import SubMenu from './SubMenu'
import {SiFastlane} from 'react-icons/si'
import {GiHamburgerMenu} from 'react-icons/gi'



const Header = () => {
    // const {systemTheme, theme, setTheme} = useTheme();
    // const [mounted, setMounted] = useState(false);

    // useEffect(() => {
    //     setMounted(true)
    // },[])

    // const renderThemeChanger = () => {
    //     if(!mounted) return null;

    //     const currentTheme = theme === 'system' ? systemTheme : theme;

    //     if (currentTheme === "dark"){
    //         return(
    //             <BsSunFill className='sun p-2 text-4xl hover:bg-indigo-500/[0.07] bg-transparent transition-all duration-300 rounded-full cursor-pointer' role="button" onClick={() => setTheme('light')} />
    //         )
    //     }
    //     else{
    //         return(
    //             <BsMoonFill className='sun p-2 text-4xl hover:bg-indigo-500/[0.07] bg-transparent transition-all duration-300 rounded-full cursor-pointer' role="button" onClick={() => setTheme('dark')} />
    //         )
    //     }
    // }


  const [show, setShow] = useState("bg-none");
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 50) {
      if (window.scrollY > lastScrollY) {
        setShow("bg-[var(--navbar-scroll-bg-color-light)] dark:bg-[var(--navbar-scroll-bg-color)]  border border-green-500/[0.1] shadow-sm");
      } else {
        setShow("bg-[var(--navbar-scroll-bg-color-light)] dark:bg-[var(--navbar-scroll-bg-color)] border border-green-500/[0.1] shadow-sm")
      }
    } else {
      setShow("bg-none border-purple-500/[0] border");
    }
    setLastScrollY(window.scrollY);
  };

  const handleSubMenu = () => {
    if(setShowSubmenu){
      setShowSubmenu(false)
    }
    else{
      setShowSubmenu(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);


  return (
    <div className={` fixed h-[60px] md:h-[var(--header-height)] top-0 left-0 flex justify-center w-full items-center px-36 z-50 `}>
    <div className={`md:flex hidden  items-center h-[60px] px-8 md:px-12 w-full justify-between rounded-[150px] transition-all duration-300  backdrop-blur-md ${show}`}>
        <div>
            <Image src="/public-logo.png" width={500} height={500} alt='hello'
            className='w-[50px] md:w-[63px] cursor-pointer p-2' 
            />
        </div>
        <div className='menu h-full box-border relative'>
            <ul className='md:flex h-full items-center hidden md:gap-8 transition-all relative'>
                <NavLink linkTo='/pricing' linkText="Pricing"/>        
                {/* <NavLink linkTo='/' linkText={`Products`} showArrow={true} onclick={(event) => {
              event.preventDefault();
              setOpenProducts((prev) => !prev);
            }}/>

                {openProducts && (
                    <SubMenu className="show"/>
                )} */}



                <NavLink linkTo='/' linkText="Products" showArrow={true} />



                <NavLink linkTo='/usage' linkText="Usage"/>


                <NavLink linkTo='/about' linkText="About"/>
                {/* <NavLink linkTo='/' linkText="Business" className={`text-white hover:text-green-400`}/> */}
                
                {/* {renderThemeChanger()} */}

            </ul>
        </div>
    </div>
      
                    
      {showSubmenu && (
      <div className='' >
        <SubMenu />
        <div className='absolute right-[365px] top-[94px] w-[550px] h-[178%] p-8 pb-10 px-7  border border-green-950/[0.7] rounded-xl'></div>   
      </div> 
      )}
                

      <div className="mobile-menu md:hidden absolute px-[140px] top-10 flex w-[90%] h-[180px] items-center bg-green-900/[0.07] border border-green-500/[0.35] rounded-full backdrop-blur-lg text-[90px] justify-between">
        <div>
            <Image src="/public-logo.png" width={1000} height={1000} alt='hello'
            className='w-[55%] md:w-[63px] cursor-pointer p-2' 
            />
        </div>

        <div>
          <GiHamburgerMenu className='text-green-100 text-[80px]'/>
        </div>

      </div>
    </div>
  )
}

export default Header


//bg-[#0045]/[0.8] backdrop-blur-sm