import Image from 'next/image'
import React, { Suspense } from 'react'
import FilterComponent from './components/filterComponent'
import ProductsList from '../components/productsList'
import { wixClientServer } from '@/lib/wixClientServer'


const Page = async ({ searchParams }: { searchParams: Record<string, string> }) => {

    const wixClient = await wixClientServer();
    const response = await wixClient.collections.getCollectionBySlug(searchParams.cat || 'all-products');
    console.log(response);
    console.log(searchParams)

    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-20 relative'>
            {/* Text and Image div */}
            <div className='h-52 sm:h-60 flex bg-gray-100 pl-4 sm:px-10 lg:px-20 xl:40'>
                {/* Text div*/}
                <div className='w-2/3 flex flex-col gap-3 items-start justify-center '>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-bold'>Grab upto 50% off on <br /> selected products</h1>
                    <button className='text-sm md:text-base p-2 px-3 bg-primary text-white hover:bg-black rounded-full'>Buy now</button>
                </div>
                {/* Image div*/}
                <div className='w-1/3 relative' >
                    <Image src='/headphones.png'
                        alt='listPageImage' fill className='object-contain'>
                    </Image>
                </div>
            </div>

            {/* Filter part */}
            <FilterComponent />

            {/* Products list part */}
            <h1 className='text-2xl font-semibold mt-10'>{response?.collection?.name} For You!</h1>
            <Suspense fallback="Loading...">
                <ProductsList categoryId={response.collection?._id || "00000000-000000-000000-000000000001"} searchParams={searchParams} />
            </Suspense>
        </div>
    )
}

export default Page
