import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Socials from './Socials';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className='flex justify-between'>
            <div className='p-6 rounded-md w-full md:w-[650px] bg-transparent md:bg-[#CAC3BA] md:shadow-md sm:shadow-black md:hover:shadow-lg sm:hover:shadow-black'>

                <ul className={`flex-col justify-between items-center gap-5 md:flex md:flex-row md:space-x-6 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
                    <li className="hover:scale-105 md:hover:text-white text-lg shadow-md shadow-[#4D2A22] rounded-md w-[150px] h-[50px] p-2 md:shadow-none">
                        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                            About Me
                        </NavLink>
                    </li>
                    <li className="hover:scale-105 md:hover:text-white text-lg shadow-md shadow-[#4D2A22] rounded-md w-[150px] h-[50px] p-2 md:shadow-none">
                        <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
                            Projects
                        </NavLink>
                    </li>
                    <li className="hover:scale-105 md:hover:text-white text-lg shadow-md shadow-[#4D2A22] rounded-md w-[150px] h-[50px] p-2 md:shadow-none">
                        <NavLink to="/contacts" onClick={() => setMenuOpen(false)}>
                            Contact Me
                        </NavLink>
                    </li>
                    <li className="hover:scale-105 md:hover:text-white text-lg shadow-md shadow-[#4D2A22] rounded-md w-[150px] h-[50px] p-2 md:shadow-none">
                        <NavLink to="/others" onClick={() => setMenuOpen(false)}>
                            Others
                        </NavLink>
                    </li>
                </ul>

                <div className='md:hidden mt-2'>
                    <button onClick={toggleMenu} className='p-2 border-0 rounded-md'>
                        {menuOpen ? <IoMdClose className='text-4xl' /> : <IoMdMenu className='text-4xl' />}
                    </button>
                </div>
            </div>

            <div className='flex mt-4 sm:mt-0'>
                <Socials />
            </div>
        </div>
    );
}

export default Navbar;
