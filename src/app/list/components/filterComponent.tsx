'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React from 'react'

const FilterComponent = () => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const handleFilterChange = ((e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        replace(`${pathname}?${params.toString()}`)
    });

    return (
        <div className='mt-10 flex justify-between gap-4 items-start'>
            {/* Left side filter*/}
            <div className='flex items-center gap-5 flex-wrap'>
                <select name="type" id="" className='px-4 py-2 text-sm rounded-full font-medium' onChange={handleFilterChange}>
                    <option value="">Type</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>

                <input type="text" name="min" placeholder='min price' className='w-28 rounded-full outline-none px-4 py-2 ring-1 ring-gray-400 text-sm' onChange={handleFilterChange} />

                <input type="text" name="max" placeholder='max price' className='w-28 rounded-full outline-none px-4 py-2 text-sm ring-1 ring-gray-400' onChange={handleFilterChange} />

                {/*
                <select name="type" id="" className='px-4 py-2 rounded-full text-sm font-medium'>
                    <option value="">Size</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>

                <select name="type" id="" className='px-4 py-2 rounded-full text-sm font-medium'>
                    <option value="">Color</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>
                */}

                <select name="cat" id="" className='px-4 py-2 rounded-full text-sm font-medium' onChange={handleFilterChange}>
                    <option value="">Category</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>

                <select name="all" id="" className='px-4 py-2 rounded-full text-sm font-medium' onChange={handleFilterChange}>
                    <option value="">All Filters</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>
            </div>

            {/* Sort by selectbox*/}
            <div>
                <select name="sort" id="" className='px-4 py-2 rounded-full text-sm font-medium' onChange={handleFilterChange}>
                    <option>Sort by</option>
                    <option value="asc price">Price (low to high)</option>
                    <option value="desc price">Price (high to low)</option>
                    <option value="asc lastUpdated">Newest</option>
                    <option value="desc lastUpdated">Oldest</option>
                </select>
            </div>
        </div>
    )
}

export default FilterComponent
