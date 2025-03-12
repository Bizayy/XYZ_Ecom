'use client'
import { products } from '@wix/stores';
import React, { useEffect, useState } from 'react'
import AddToCartComponent from './addToCartComponent';

const CustomizeComponent = ({ productId, variants, productOptions }: {
    productId?: string;
    variants: products.Variant[];
    productOptions: products.ProductOption[];

}) => {
    console.log(productOptions);

    const [selectedOptions, setIsSelectedOptions] = useState<{ [key: string]: string }>({});
    const handleOptionsSelect = (optionType: string, choice: string) => {
        setIsSelectedOptions((prev) => ({ ...prev, [optionType]: choice }))
    };

    console.log(variants);

    const [selectedVariant, setSelectedVariant] = useState<products.Variant>();
    useEffect(() => {
        const variant = variants.find(v => {
            const variantChoices = v.choices;
            if (!variantChoices) return false;

            return Object.entries(selectedOptions).every(([key, value]) => variantChoices[key] === value);
        });
        setSelectedVariant(variant);
    }, [selectedOptions, variants])

    const isVariantInStock = (choices: { [key: string]: string }) => {
        return variants.some((variant) => {
            const variantChoices = variant.choices;
            if (!variantChoices) return false

            return Object.entries(choices).every(
                ([key, value]) => variantChoices[key] === value
            ) && variant.stock?.inStock && variant.stock.quantity && variant.stock.quantity > 0;
        })
    }
    // console.log(selectedOptions);
    console.log(productOptions);

    return (

        <div className='flex flex-col gap-4'>

            {productOptions.map(option => (

                <div className='flex flex-col justify-between gap-2' key={option.name}>
                    <span className='font-medium'>Choose a {option.name}</span>
                    <div className='flex items-center gap-3'>
                        {option.choices?.map(choice => {
                            const disabled = !isVariantInStock({ ...selectedOptions, [option.name!]: choice.description! });
                            const selected = selectedOptions[option.name!] === choice.description
                            const clickHandler = disabled ? undefined : () => handleOptionsSelect(option.name!, choice.description!)
                            return option.name === 'Color' ? (
                                <div
                                    className='relative w-6 h-6 rounded-full ring-2 ring-gray-300'
                                    style={{
                                        cursor: disabled ? "not-allowed" : "pointer",
                                        backgroundColor: choice.description?.toLowerCase(),
                                    }}
                                    key={choice.value} onClick={clickHandler}
                                >
                                    {selected && (
                                        <div className="absolute inset-0 w-8 h-8 -m-1 rounded-full ring-2 ring-gray-500"></div>
                                    )}
                                    {disabled && (
                                        <div className='absolute w-8 h-[2px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-400 rotate-45'></div>
                                    )}
                                </div>

                            ) : (
                                <span className='w-20 rounded-md px-4 py-1 text-sm ring-1 ring-pink-600 text-center cursor-not-allowed' key={choice.description}
                                    style={{
                                        cursor: disabled ? "not-allowed" : "pointer",
                                        backgroundColor: selected ? "#f35c7a" : disabled ? "#fbcfe8" : 'white',
                                        color: selected || disabled ? "white" : '#f35c7a',
                                        boxShadow: disabled ? 'none' : '',
                                    }}
                                    onClick={clickHandler}>
                                    {choice.description}
                                </span>
                            )
                        })}
                    </div>
                    {/*
                    <span className='font-medium'>Choose a {option.name}</span>
                    <div className='flex items-center gap-3'>
                        <div className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative'>
                            <div className='w-6 h-6 rounded-full ring-2 ring-gray-300 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                        </div>
                        <div className='w-6 h-6 rounded-full ring-1 ring-gray-300 cursor-pointer bg-red-400'></div>
                        <div className='w-6 h-6 rounded-full ring-1 ring-gray-300 bg-white relative cursor-not-allowed'>
                            <div className='absolute w-8 h-[2px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-400 rotate-45'></div>
                        </div>
                    </div>
                    */}
                </div>
            ))}

            <AddToCartComponent productId={productId!} variantId={selectedVariant?._id || '00000000-0000-0000-0000-000000000000'} stockNumber={selectedVariant?.stock?.quantity || 0} />

            {/*
            <div className='flex flex-col items-start justify-between gap-2'>
                <span className='font-medium'>Choose a size</span>
                <div className='flex gap-3 items-center'>
                    <span className='w-20 bg-gray-300 rounded-md px-5 py-1 text-sm text-white cursor-not-allowed'>Large</span>
                    <span className='w-20 bg-transparent rounded-md border border-pink-600 text-sm px-3 py-1 text-pink-600 cursor-pointer'>Medium</span>
                    <span className='w-20 bg-pink-600 rounded-md px-5 py-1 text-sm text-white'>Small</span>
                </div>
            </div>
            */}
        </div>
    )
}

export default CustomizeComponent;
