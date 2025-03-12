import Image from 'next/image'
import React from 'react'
import ProductImages from '../components/productImages'
import CustomizeComponent from '../components/singlePageDescContainer/customizeComponent'
import AddToCartComponent from '../components/singlePageDescContainer/addToCartComponent'
import { wixClientServer } from '@/lib/wixClientServer'
import { notFound } from 'next/navigation'

const Page = async ({ params }: { params: { slug: string } }) => {

    const wixClient = await wixClientServer();
    const response = await wixClient.products.queryProducts().eq("slug", params.slug).find();

    if (!response.items[0]) {
        return notFound();
    }

    const product = response.items[0];
    console.log(product.productOptions);

    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-20 py-4 relative flex flex-col lg:flex-row gap-14'>

            {/* Image Container */}
            <div className='w-full lg:w-1/2'>
                <ProductImages items={product.media?.items} />
            </div>

            {/* Description Container */}
            <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                <h1 className='text-4xl font-medium'>{product.name}</h1>
                <p className='text-gray-500'>{product.description}</p>

                {product.priceData?.price === product.priceData?.discountedPrice ? (
                    <div className='py-4 flex items-center gap-3 border-t border-b border-t-gray-300 border-b-gray-300'>
                        <span className='font-medium text-lg'>{product.priceData?.currency} {product.priceData?.discountedPrice}</span>
                    </div>
                ) : (
                    <div className='py-4 flex items-center gap-3 border-t border-b border-t-gray-300 border-b-gray-300'>
                        <span className='text-gray-400 line-through'>{product.priceData?.currency} {product.priceData?.price}</span>
                        <span className='text-lg font-medium'>{product.priceData?.currency} {product.priceData?.discountedPrice}</span>
                    </div>)
                }

                {
                    product.variants && product.productOptions ?
                        <CustomizeComponent productId={product._id!} variants={product.variants} productOptions={product.productOptions} /> :
                        <AddToCartComponent productId={product._id!} variantId="00000000-0000-0000-0000-000000000000" stockNumber={product.stock?.quantity || 0} />
                }

                <div className='py-5 border-t border-t-gray-300 flex flex-col items-start gap-4 text-sm font-medium'>

                    {product.additionalInfoSections?.map((section: any) => (
                        <div key={section.title}>

                            <span>{section.title}</span>
                            <p>{section.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Page
