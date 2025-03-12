import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { wixClientServer } from '@/lib/wixClientServer';
import { products } from '@wix/stores';
import PaginationComponent from './paginationComponent';

const ProductsList = async ({ categoryId, limit, searchParams }: { categoryId: string; limit?: number; searchParams?: any }) => {

    const productsPerPage = 8;
    const awaitedSearchParams = await searchParams; // searchParams must be awaited before using.
    const wixClient = await wixClientServer();
    let productQuery = wixClient.products.
        queryProducts().
        startsWith("name", awaitedSearchParams?.name || "").
        eq('collectionIds', categoryId!).
        hasSome("productType", awaitedSearchParams?.type ? [awaitedSearchParams.type] : ["physical", "digital"]).
        gt("priceData.price", awaitedSearchParams?.min || 0).
        lt("priceData.price", awaitedSearchParams?.max || 999999).
        limit(limit || productsPerPage).
        skip(awaitedSearchParams?.page ? parseInt(awaitedSearchParams.page) * (limit || productsPerPage) : 0)
    // .find();

    console.log(productQuery);

    if (awaitedSearchParams?.sort) {
        const [sortType, sortBy] = awaitedSearchParams.sort.split(" ");
        console.log(sortType, sortBy)

        productQuery =
            sortType === "asc" ? productQuery.ascending(sortBy) :
                sortType === "desc" ? productQuery.descending(sortBy) :
                    productQuery;

        // if (sortType === 'asc') {
        //     productQuery.ascending(sortBy);
        // }
        // else if (sortType === 'desc') {
        //     productQuery.descending(sortBy);
        // }
    }

    const response = await productQuery.find();

    console.log(response);
    return (

        <div className=''>

            <div className='flex justify-between flex-wrap gap-x-5 gap-y-10 mt-5 '>

                {/* Implement using map function */}
                {response.items.map((product: products.Product) => (

                    <div className='w-full relative max-w-[350px] sm:w-[47%] lg:w-[22%] flex flex-col justify-between items-center gap-5
                    bg-gray-100 rounded-md px-4 py-4' key={product._id}>
                        {/* Image */}
                        <Link href={"/" + product.slug} className='relative w-full h-40'>
                            <Image src={product.media?.mainMedia?.image?.url ||
                                "https://images.pexels.com/photos/30146008/pexels-photo-30146008/free-photo-of-traditional-turkish-coffee-brewing-on-hot-coals.jpeg"}
                                fill sizes='20vw' alt='' className='object-cover z-10 hover:opacity-0 transition-opacity ease-in duration-300' />
                            {product.media?.items &&
                                (<Image src={product.media?.items[1]?.image?.url || 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg'}
                                    fill sizes='20vw' alt='' className='object-cover' />)
                            }
                        </Link>

                        {/* Title and Price */}
                        <div className='w-full flex justify-between'>
                            <div className='font-medium'>{product.name}</div>
                            <div className='font-semibold'>{product.priceData?.currency} {product.priceData?.price}</div>
                        </div>

                        {/* Description*/}
                        {/*<div className='text-sm text-gray-500 text-center'>{product.additionalInfoSections?.find((section: any) => section.title === "PRODUCT INFO")?.description || ""}</div>*/}
                        <div className='text-sm text-gray-500 text-center'>{product.description}</div>

                        {/* Add to Cart button*/}
                        <button className='text-sm w-max rounded-full p-2 text-center ring-1 ring-primary hover:bg-primary hover:text-white'>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <PaginationComponent currentPageNumber={response.currentPage || 0} hasPrevious={response.hasPrev()} hasNext={response.hasNext()} />
        </div >
    )
}

export default ProductsList
