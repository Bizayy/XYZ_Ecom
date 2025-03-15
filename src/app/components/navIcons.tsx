'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { IoMdCart } from 'react-icons/io'
import { IoNotificationsOutline } from 'react-icons/io5'
import CartModal from './cartModal'
import { useWixClientHook } from '@/hooks/useWixClientHook'

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const [isCartOpen, setIsCartOpen] = useState(false);

    const isLoggedIn = false;

    const router = useRouter();

    const handleProfileClick = () => {
        if (!isLoggedIn) {
            router.push("/login")
        }
        setIsProfileOpen(prev => !prev);
    }

    const wixClient = useWixClientHook();

    const login = async () => {
        const loginRequestData = wixClient.auth.generateOAuthData(
            'http://localhost:3000',
        );
        console.log(loginRequestData);
        localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
        const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
        console.log(authUrl)
        window.location.href = authUrl;
    }

    return (
        <div className='flex items-center gap-6 xl:gap-8 relative'>
            <FaRegCircleUser size={24} className='cursor-pointer'
                // onClick={handleProfileClick}
                onClick={login}
            />
            {isProfileOpen && <div className='absolute rounded-md top-9 -left-6 p-4 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.3)] z-10'>
                <Link href=''>Profile</Link>
                <div className='mt-2'>Logout</div>
            </div>}
            <IoNotificationsOutline size={24} className='cursor-pointer' />
            <div className='relative cursor-pointer' onClick={() => setIsCartOpen(prev => !prev)}>
                <IoMdCart size={24} className='cursor-pointer' />
                <div className='absolute -top-3 -right-3 rounded-full bg-pink-600 text-white text-xs font-semibold w-5 h-5 text-center p-1'>1</div>
            </div>
            {isCartOpen && <CartModal />}
        </div>
    )
}

export default NavIcons
