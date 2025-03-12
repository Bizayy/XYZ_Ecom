import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const NewProductsList = () => {
    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-20 py-4'>

            <h1 className='text-2xl font-bold'>New Products</h1>

            <div className='flex justify-between flex-wrap gap-x-5 gap-y-10 mt-5 '>

                {/* Implement using map function */}

                <div className='w-full relative sm:w-[47%] lg:w-[22%] flex flex-col justify-between items-center gap-5
                    bg-gray-100 rounded-md px-4 py-4'>
                    {/* Image */}
                    <Link href='/' className='relative w-full h-40'>
                        <Image src='https://images.pexels.com/photos/30146008/pexels-photo-30146008/free-photo-of-traditional-turkish-coffee-brewing-on-hot-coals.jpeg'
                            fill sizes='20vw' alt='' className='object-cover z-10 hover:opacity-0 transition-opacity ease-in duration-300' />
                        <Image src='https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg'
                            fill sizes='20vw' alt='' className='object-cover ' />
                    </Link>

                    {/* Title and Price */}
                    <div className='w-full flex justify-between'>
                        <div className='font-medium'>Coffee</div>
                        <div className='font-semibold'>$10</div>
                    </div>

                    {/* Description*/}
                    <div className='text-sm text-gray-500'>Lorem ipsum dolor sit amet.</div>

                    {/* Add to Cart button*/}
                    <button className='text-sm w-max rounded-full p-2 text-center ring-1 ring-primary hover:bg-primary hover:text-white'>
                        Add to Cart
                    </button>
                </div>
                <div className='w-full relative sm:w-[47%] lg:w-[22%] flex flex-col justify-between gap-5 bg-gray-100 rounded-md px-4 py-4'>
                    {/* Image */}
                    <Link href='/' className='relative w-full h-40'>
                        <Image src='https://images.pexels.com/photos/30146008/pexels-photo-30146008/free-photo-of-traditional-turkish-coffee-brewing-on-hot-coals.jpeg'
                            fill sizes='20vw' alt='' className='object-cover z-10 hover:opacity-0 transition-opacity ease-in duration-300' />
                        <Image src='https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg'
                            fill sizes='20vw' alt='' className='object-cover ' />
                    </Link>

                    {/* Title and Price */}
                    <div className='w-full flex justify-between'>
                        <div className='font-medium'>Coffee</div>
                        <div className='font-semibold'>$10</div>
                    </div>

                    {/* Description*/}
                    <div className='text-sm text-gray-500'>Lorem ipsum dolor sit amet.</div>

                    {/* Add to Cart button*/}
                    <button className='text-sm w-max rounded-full p-2 text-center ring-1 ring-primary hover:bg-primary hover:text-white'>
                        Add to Cart
                    </button>
                </div>
                <div className='w-full relative sm:w-[47%] lg:w-[22%] flex flex-col justify-between gap-5 bg-gray-100 rounded-md px-4 py-4'>
                    {/* Image */}
                    <Link href='/' className='relative w-full h-40'>
                        <Image src='https://images.pexels.com/photos/30146008/pexels-photo-30146008/free-photo-of-traditional-turkish-coffee-brewing-on-hot-coals.jpeg'
                            fill sizes='20vw' alt='' className='object-cover z-10 hover:opacity-0 transition-opacity ease-in duration-300' />
                        <Image src='https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg'
                            fill sizes='20vw' alt='' className='object-cover ' />
                    </Link>

                    {/* Title and Price */}
                    <div className='w-full flex justify-between'>
                        <div className='font-medium'>Coffee</div>
                        <div className='font-semibold'>$10</div>
                    </div>

                    {/* Description*/}
                    <div className='text-sm text-gray-500'>Lorem ipsum dolor sit amet.</div>

                    {/* Add to Cart button*/}
                    <button className='text-sm w-max rounded-full p-2 text-center ring-1 ring-primary hover:bg-primary hover:text-white'>
                        Add to Cart
                    </button>
                </div>
                <div className='w-full relative sm:w-[47%] lg:w-[22%] flex flex-col justify-between gap-5 bg-gray-100 rounded-md px-4 py-4'>
                    {/* Image */}
                    <Link href='/' className='relative w-full h-40'>
                        <Image src='https://images.pexels.com/photos/30146008/pexels-photo-30146008/free-photo-of-traditional-turkish-coffee-brewing-on-hot-coals.jpeg'
                            fill sizes='20vw' alt='' className='object-cover z-10 hover:opacity-0 transition-opacity ease-in duration-300' />
                        <Image src='https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg'
                            fill sizes='20vw' alt='' className='object-cover ' />
                    </Link>

                    {/* Title and Price */}
                    <div className='w-full flex justify-between'>
                        <div className='font-medium'>Coffee</div>
                        <div className='font-semibold'>$10</div>
                    </div>

                    {/* Description*/}
                    <div className='text-sm text-gray-500'>Lorem ipsum dolor sit amet.</div>

                    {/* Add to Cart button*/}
                    <button className='text-sm w-max rounded-full p-2 text-center ring-1 ring-primary hover:bg-primary hover:text-white'>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div >
    )
}

export default NewProductsList
