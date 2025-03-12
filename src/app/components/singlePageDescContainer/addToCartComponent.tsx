'use client'
import React, { useState } from 'react'

const AddToCartComponent = ({ productId, variantId, stockNumber }: { productId: string; variantId: string; stockNumber: number }) => {

    const [qty, setQty] = useState(1);

    const stock = 4;

    const handleQty = (v: string) => {
        if (v === '+' && qty < stockNumber) {
            setQty(prev => prev + 1);
        }
        else if (v === '-' && qty > 1) {
            setQty(prev => prev - 1);
        }
    }

    return (
        <div className='flex flex-col gap-3'>
            <span className='font-medium'>Choose a quantity</span>

            <div className=' flex items-center justify-between gap-3'>
                {/* Quantity add and remove section */}
                <div className='w-2/3 flex items-center gap-5'>
                    <div className='w-20 py-1 px-2 text-xl flex items-center justify-between rounded-full bg-gray-300'>
                        <button className='cursor-pointer' onClick={() => handleQty('-')}>-</button>
                        <input type='text' value={qty} onChange={(event) => { setQty(Number(event.target.value)) }}
                            className='w-1/2 bg-transparent outline-none text-center text-lg' />
                        <button className='cursor-pointer' onClick={() => handleQty('+')}>+</button>
                    </div>
                    {stockNumber < 1 ? (
                        <span className='text-xs lg:text-sm'>Product out of stock!</span>
                    ) :
                        <div className='flex flex-col items-start text-xs lg:text-sm'>
                            <span>Only <span className='text-orange-700'>{stockNumber} items</span> left!</span>
                            <span>Don't miss it!</span>
                        </div>
                    }
                </div>

                {/* Add to Cart button */}
                <div className='w-1/3 text-right'>
                    <button className='rounded-full px-3 py-2 ring-1 ring-pink-500 text-pink-500 disabled:cursor-not-allowed hover:bg-primary hover:text-white'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default AddToCartComponent
