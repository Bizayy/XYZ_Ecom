'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoSearch } from 'react-icons/io5'

const Searchbar = () => {

    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget); // Can also use state variable with onChange event handler instead of FormData
        const name = formData.get('name') as string;

        if (name) {
            router.push(`/list?name=${name}`)
        }
    }

    return (
        <form className='flex items-center gap-2 rounded-md bg-gray-100 p-2 flex-1' onSubmit={handleSearch}>
            <input type="text" name='name' className='outline-none flex-1  rounded-sm bg-transparent' placeholder='Search here' />
            <button className='cursor-pointer'>
                <IoSearch size={24} />
            </button>
        </form>
    )
}

export default Searchbar
