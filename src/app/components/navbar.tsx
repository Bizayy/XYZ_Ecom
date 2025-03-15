import React from 'react'
import Link from 'next/link'
import Menu from './menu'
import Searchbar from './searchbar'
import NavIcons from './navIcons'
import { PiShoppingCartFill } from 'react-icons/pi'

const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-20 py-4 relative'>
            {/*For mobile devices:*/}
            <div className='h-full flex items-center justify-between md:hidden'>
                <Link href="/">
                    <div className='text-2xl tracking-wide'>XYZ</div>
                </Link>
                <Menu />
            </div>
            {/*For bigger screens: */}
            <div className='hidden md:flex items-center justify-center gap-8'>
                {/* Left Section */}
                <div className='w-1/3 lg:w-1/2 flex gap-10'>
                    <Link href="/" className='flex items-center gap-2'>
                        <PiShoppingCartFill size={25} />
                        <div className='text-2xl tracking-wide'>XYZ</div>
                    </Link>
                    <div className='hidden lg:flex items-center justify-between w-2/3'>
                        <Link href="/">Home</Link>
                        <Link href="/">Shop</Link>
                        <Link href="/">Deals</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                    </div>
                </div>
                {/* Right Section */}
                <div className='w-2/3 lg:w-1/2 flex items-center justify-between gap-8'>
                    <Searchbar />
                    <NavIcons />
                </div>
            </div>
        </div>
    )
}

export default Navbar
