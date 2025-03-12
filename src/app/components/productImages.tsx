'use client'
import React, { useState } from 'react'
import Image from 'next/image'

// const images = [
//     {
//         id: 1,
//         url: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
//     },
//     {
//         id: 2,
//         url: 'https://images.pexels.com/photos/30911365/pexels-photo-30911365/free-photo-of-delicious-pancakes-with-fresh-fruit-toppings.jpeg',
//     },
//     {
//         id: 3,
//         url: 'https://images.pexels.com/photos/30906052/pexels-photo-30906052/free-photo-of-traditional-moroccan-mint-tea-set-on-red-rug.jpeg',
//     },
//     {
//         id: 4,
//         url: 'https://images.pexels.com/photos/16228425/pexels-photo-16228425/free-photo-of-turkish-tea-in-glass-on-plate.jpeg',
//     },
// ]
const ProductImages = ({ items }: { items: any }) => {

    const [index, setIndex] = useState(0);

    return (
        // Image container
        < div className='sticky top-14' >
            {/* Big Image */}
            < div className='relative h-[58vh]' >
                <Image src={items[index].image?.url}
                    alt=''
                    fill
                    sizes='50vw'
                    className='object-cover rounded-md' />
            </div >

            {/* Smaller Images*/}
            < div className='flex items-center justify-between gap-4 mt-4 cursor-pointer' >
                {
                    items.map((item: any, i: number) => (
                        <div key={item._id} className='relative w-1/4 h-24 gap-4 mt-7' onClick={() => setIndex(i)}>
                            <Image src={item.image?.url} alt='' fill sizes='30vw' className='object-cover rounded-md' />
                        </div>
                    ))
                }
            </div >
        </div >
    )
}

export default ProductImages
