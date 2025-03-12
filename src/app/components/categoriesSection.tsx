// 'use client'
import React from 'react'
// import categoriesList from '../utils/categoriesList'
import Link from 'next/link'
import Image from 'next/image'
import { wixClientServer } from '@/lib/wixClientServer'

const CategoriesSection = async () => {

    const wixClient = await wixClientServer();
    const categories = await wixClient.collections.queryCollections().find();
    // console.log(categories.items);

    return (
        <div className='p-4 w-full flex flex-col h-[450px]'>
            <h1 className='text-2xl font-bold md:px-4 lg:px-12 xl:px-16 py-4'>Categories</h1>
            <div className='w-full overflow-x-scroll flex items-center gap-8 md:gap-10 lg:gap-12 cursor-pointer
                            h-full displayScrollBar-none'>
                {categories.items.map(category => (
                    <div key={category._id} className='flex-shrink-0 w-full sm:w-[47%] md:w-[29%] lg:w-[20%] h-full flex flex-col items-center'>
                        <Link className='relative w-full h-full' href={"/list?cat=" + category.slug}>
                            <Image src={category.media?.mainMedia?.image?.url || ""} fill sizes='30vw' alt='' className='object-cover rounded-md' />
                        </Link>
                        <h1 className='text-lg font-semibold px-1 mt-5'>{category.name}</h1>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default CategoriesSection
