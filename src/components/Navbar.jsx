import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
    const [navIsOpen, setNavIsOpen] = useState(false);

    return(
        <nav className='bg-neutral-50 px-5 flex h-10 items-center'>
            <h1 className='font-bold mr-auto'>AutoHub</h1>

            <div className=''>

                <button onClick={setNavIsOpen = !navIsOpen}>
                    {navisOpen ? <LuMenu /> : <MdOutlineClose />}
                </button>

                <ul className='bg-neutral-50 absolute items-center top-10 pt-5 right-0 w-[60vw] h-[80vh] rounded-md shadow-slate-300 shadow-md text-center'>
                    <li><a className='font-bold text-2xl' href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Sign up</a></li>
                    <li><a href="">Sign in</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;