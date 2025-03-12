'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const PaginationComponent = ({ currentPageNumber, hasPrevious, hasNext }: { currentPageNumber: number; hasPrevious: boolean; hasNext: boolean }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className='flex gap-3 items-center mt-8 w-full justify-between'>
            <button className='w-20 p-2 rounded-md cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-200 bg-primary text-center text-white text-sm'
                disabled={!hasPrevious}
                onClick={() => createPageUrl(currentPageNumber - 1)}
            >
                Previous
            </button>
            <button className='w-20 p-2 rounded-md cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-200 bg-primary text-center text-white text-sm'
                disabled={!hasNext}
                onClick={() => createPageUrl(currentPageNumber + 1)}
            >
                Next
            </button>
        </div>
    )
}

export default PaginationComponent
