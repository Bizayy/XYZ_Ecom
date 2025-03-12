'use client'
import Image from 'next/image';
import React from 'react'

const CartModal = () => {

    const hasItems = true;

    return (
        <div className='w-max absolute rounded-md top-10 -right-[5%] bg-white p-4 shadow-[0_3px_10px_rgb(0,0,0,0.3)] z-20 flex flex-col'>
            {hasItems ?
                (
                    <>
                        <h2 className='text-lg mb-2'>Your cart</h2>
                        <div className='flex flex-col gap-6'>
                            {/* Item 1 */}
                            <div className='flex gap-3'>
                                {/* Image Section */}
                                <Image src='https://images.pexels.com/photos/30146008/pexels-photo-30146008/free-photo-of-traditional-turkish-coffee-brewing-on-hot-coals.jpeg'
                                    width={96} height={72} alt='coffee' className='rounded-md object-cover' />
                                {/* Right Section*/}
                                <div className='flex flex-col justify-between'>
                                    {/* Top Section */}
                                    <div>
                                        {/* Title and Price section*/}
                                        <div className='flex items-center justify-between gap-8'>
                                            <h3 className='font-semibold'>Product Name</h3>
                                            <div className='p-1 rounded-sm'>$49</div>
                                        </div>
                                        {/* Description */}
                                        <div className='text-sm text-gray-500'>available</div>
                                    </div>
                                    {/* Bottom Section */}
                                    <div className='flex items-center justify-between text-sm'>
                                        <span className='text-gray-500'>Qty. 2</span>
                                        <span className='cursor-pointer text-blue-500'>Remove</span>
                                    </div>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className='flex gap-3'>
                                {/* Image Section */}
                                <Image src='https://images.pexels.com/photos/30146008/pexels-photo-30146008/free-photo-of-traditional-turkish-coffee-brewing-on-hot-coals.jpeg'
                                    width={96} height={72} alt='coffee' className='rounded-md object-cover' />
                                {/* Right Section*/}
                                <div className='flex flex-col justify-between'>
                                    {/* Top Section */}
                                    <div>
                                        {/* Title and Price section*/}
                                        <div className='flex items-center justify-between gap-8'>
                                            <h3 className='font-semibold'>Product Name</h3>
                                            <div className='p-1 rounded-sm'>$49</div>
                                        </div>
                                        {/* Description */}
                                        <div className='text-sm text-gray-500'>available</div>
                                    </div>
                                    {/* Bottom Section */}
                                    <div className='flex items-center justify-between text-sm'>
                                        <span className='text-gray-500'>Qty. 2</span>
                                        <span className='cursor-pointer text-blue-500'>Remove</span>
                                    </div>
                                </div>
                            </div>
                            {/* Final bottom section with checkout */}
                            <div>
                                <div className='flex items-center justify-between font-semibold'>
                                    <span>Subtotal</span>
                                    <span>$49</span>
                                </div>
                                <p className='text-gray-500 text-sm mt-2 mb-4'>Shipping and taxes calculated at checkout.</p>
                                <div className='flex justify-between text-sm'>
                                    <button className='rounded-md px-3 py-2 ring-1 ring-gray-300'>View Cart</button>
                                    <button className='rounded-md bg-black text-white px-3 py-2'>Checkout</button>
                                </div>
                            </div>
                        </div>

                    </>
                ) :
                (<div>Empty</div>)}
        </div>
    )
}

export default CartModal
