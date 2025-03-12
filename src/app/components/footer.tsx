'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaXTwitter } from 'react-icons/fa6'
import { SiYoutube } from 'react-icons/si'
import MidPortionComponent from './footerMidComponent/midPortionComponent'
import { MdOutlineCopyright } from 'react-icons/md'

const Footer = () => {
    return (
        <div className='mt-10 bg-gray-200 p-4 md:px-8 md:py-8 lg:px-16 lg:py-10 xl:px-20 xl:py-12 flex flex-col gap-8'>

            {/* I first gave h-96 but the last div got out of the height range so I gave this div height full which made it take the
            full height that the overall div's content were occupying. At last i removed the h-full and the result was same, no need to put h-full
            it automatically takes the height the contents cover*/}

            {/* Top portion */}
            <div className='flex flex-col gap-7 md:flex-row'>

                {/* Left portion */}
                <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6'>

                    <Link href='/' className='md:text-xl lg:text-2xl tracking-wide'>XYZ</Link>
                    <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quisquam?</p>
                    <p className='text-sm font-semibold'>abc@gmail.com</p>
                    <p className='text-sm font-semibold'>+987 654 321 123 4</p>

                    {/* Icons Portion */}
                    <div className='flex items-center gap-4 lg:gap-5 cursor-pointer'>
                        <FaFacebook />
                        <FaInstagram />
                        <SiYoutube />
                        <FaPinterest />
                        <FaXTwitter />
                    </div>

                </div>

                {/* Center portion */}
                <div className='hidden lg:w-1/2 lg:flex'>
                    {/* Company */}
                    <MidPortionComponent title='COMPANY' miniTitle1='About Us' miniTitle2='Careers' miniTitle3='Affiliates' miniTitle4='Blog'
                        miniTitle5='Contact Us' />

                    {/* Shop */}
                    <MidPortionComponent title='SHOP' miniTitle1='New Arrivals' miniTitle2='Accessories' miniTitle3='Men'
                        miniTitle4='Women' miniTitle5='All Products' />

                    {/* Help */}
                    <MidPortionComponent title='HELP' miniTitle1='Customer Service' miniTitle2='My Account' miniTitle3='Find a Store'
                        miniTitle4='Legal and Privacy' miniTitle5='Gift Card' />
                </div>

                {/* Right portion */}
                <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-5'>
                    <h1>SUBSCRIBE</h1>
                    <p className='text-sm'>Be the first to get the latest news about trends, promotions and much more.</p>
                    <div className='flex text-sm'>
                        <input type="text" placeholder='Your email' className='w-56 md:w-2/3 lg:w-full p-2 lg:p-3 outline-none' />
                        <button className='bg-pink-600 text-white p-2 lg:p-3'>Join</button>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-sm font-semibold'>Secure Payments</h3>
                        <div className='flex items-center justify-between md:gap-4 lg:gap-3 w-full'>
                            <Image src='https://1000logos.net/wp-content/uploads/2021/05/Discover-logo-500x281.png' alt='discoverLogo' width={50} height={40}
                                className='md:w-[40px] md:[h-30px] xl:w-[50px] xl:h-[40px] object-contain' />
                            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Skrill_logo.svg/568px-Skrill_logo.svg.png' alt='skrillLogo' width={40} height={30}
                                className='md:w-[30px] md:[h-20px] xl:w-[40px] xl:h-[30px] object-contain' />
                            <Image src='https://img.icons8.com/color/96/paypal.png' alt='skrillLogo' width={40} height={30} className='md:w-[30px] md:[h-20px]' />
                            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1295px-Mastercard_2019_logo.svg.png' alt='mastercardLogo' width={40} height={30}
                                className='md:w-[30px] md:[h-20px] xl:w-[40px] xl:h-[30px] object-contain' />
                            <Image src='https://cdn.iconscout.com/icon/free/png-512/free-visa-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-7-pack-logos-icons-3030281.png' alt='visaCardLogo' width={40} height={30}
                                className='md:w-[30px] md:[h-20px] xl:w-[40px] xl:h-[30px] object-contain' />
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom portion */}
            <div className='flex flex-col gap-5 md:gap-0 md:flex-row items-center text-sm justify-between'>

                <div className='flex items-center'>
                    <MdOutlineCopyright />
                    <span>2025 Bizay</span>
                </div>

                <div className='flex flex-col gap-5  md:flex-row md:gap-3'>
                    <div className='flex gap-2'>
                        <h3 className='text-gray-600'>Language</h3>
                        <p className='font-medium'>UnitedStates | English</p>
                    </div>
                    <div className='flex gap-2'>
                        <h3 className='text-gray-600'>Currency</h3>
                        <p className='font-medium'>USD</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
