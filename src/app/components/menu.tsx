'use client'

// use client is used to make user side component or the components that will have to interact with users.

import React from 'react'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import Link from 'next/link';


const Menu = () => {

    const [clicked, setClicked] = useState(false);

    return (
        <div className=''>
            <IoMenu size={23} className='cursor-pointer z-10'
                onClick={() => setClicked((prev) => !prev)} /> {/*toggles between t and f*/}
            {
                clicked && ( //Conditional Rendering
                    <div className='flex flex-col gap-9 items-center justify-center absolute top-16 right-0 bg-black text-white h-screen w-full z-10 text-xl'>
                        <Link href={"/"}>Home</Link>
                        <Link href={""}>Shop</Link>
                        <Link href={""}>Deals</Link>
                        <Link href={""}>About Us</Link>
                        <Link href={""}>Contact Us</Link>
                        <Link href={""}>Logout</Link>
                        <Link href={""}>Cart(1)</Link>
                    </div>
                )}
        </div>
    )
}

export default Menu
