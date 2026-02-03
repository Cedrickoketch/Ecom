import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
    const [navIsOpen, setNavIsOpen] = useState(false);

    return(
        <nav className='bg-neutral-50 px-5 flex h-10 w-full items-center'>
            <h1 className='font-bold mr-auto pl-5'>AutoHub</h1>

            <div className='sticky top-0 lg:hidden ml-auto flex flex-col items-right'>

                <button>
                    <LuMenu />
                </button>

                <div className='absolute top-10 flex flex-col w-full h-full items-center gap-10 list-none'>
                    <li><a className='font-bold text-sm hover:text-blue-500' href="">Home</a></li>
                    <li><a className='font-bold text-sm hover:text-blue-500' href="">About</a></li>
                    <li><a className='font-bold text-sm hover:text-blue-500' href="">Sign up</a></li>
                    <li><a className='font-bold text-sm hover:text-blue-500' href="">Sign in</a></li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;