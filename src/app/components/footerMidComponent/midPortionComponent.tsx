import React from 'react'
import Link from 'next/link'

interface propTypes {
    title: string,
    miniTitle1: string,
    miniTitle2: string,
    miniTitle3: string,
    miniTitle4: string,
    miniTitle5: string,
}
const MidPortionComponent = (props: propTypes) => {
    return (
        <div className='w-1/3 flex flex-col gap-10'>
            <h1 className=''>{props.title}</h1>
            <div className='flex flex-col items-start gap-4 text-xs lg:text-sm'>
                <Link href=''>{props.miniTitle1}</Link>
                <Link href=''>{props.miniTitle2}</Link>
                <Link href=''>{props.miniTitle3}</Link>
                <Link href=''>{props.miniTitle4}</Link>
                <Link href=''>{props.miniTitle5}</Link>
            </div>
        </div>
    )
}

export default MidPortionComponent
