import { useState } from 'react';
import styles from '@/app/components/(buttons)/NavHamburgerToggle/hamburger.module.css';

interface HamburgerMenuProps {
    menu: React.ReactNode;
}

//const NavHamburgerMenu: React.FC<HamburgerMenuProps> = ({ menu }) => {
const NavHamburgerMenu = () => {
    const [navMenu, setNavMenu] = useState(false);
    const [isFocused, setIsFocused] = useState(false);


    const toggleNavMenu = () => {
        setNavMenu(!navMenu);
        setIsFocused(!isFocused);
    };

    return (
        <div></div>
        //<div>
        //    <button
        //        className={`pr-4 z-20 md:hidden cursor-pointer relative group ${isFocused ? 'focused' : ''}`}
        //        onClick={toggleNavMenu}
        //    >
        //        <div className="relative flex overflow-hidden items-center justify-center rounded-[50%] w-15 h-15 border-black border transform transition-all drop-shadow-harsh bg-primary-container p-2.5 ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md">
        //            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
        //                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isFocused ? 'translate-x-10' : ''}"></div>
        //                <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${isFocused ? 'translate-x-10 delay-75' : ''}"></div>
        //                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isFocused ? 'translate-x-10 delay-150' : ''}"></div>

        //                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 ${isFocused ? 'translate-x-0' : '-translate-x-10'} flex w-${isFocused ? '12' : '0'}">
        //                    <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${isFocused ? 'rotate-45' : ''}"></div>
        //                    <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${isFocused ? '-rotate-45' : ''}"></div>
        //                </div>
        //            </div>
        //        </div>
        //    </button>
        //    {navMenu && menu}
        //</div>
    );
};

export default NavHamburgerMenu;