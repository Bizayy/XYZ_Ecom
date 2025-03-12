// 'use client'

import Image from "next/image";
import HomepageSlider from "./components/homepageSlider";
import ProductsList from "./components/productsList";
import CategoriesSection from "./components/categoriesSection";
import NewProductsList from "./components/newProductsList";
// import { useEffect } from "react";
// import { useWixClientHook } from "@/hooks/useWixClientHook";
// import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense } from "react";
export default async function Home() {

    // const wixClient = useWixClientHook();
    // useEffect(() => {
    //
    //     const getProducts = async () => {
    //         const response = await wixClient.products.queryProducts().find();
    //         console.log(response);
    //     };
    //
    //     getProducts();
    //
    // }, [wixClient])

    return (
        <div>
            <HomepageSlider />
            <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-4">
                <h1 className='text-2xl font-bold'>Featured Products</h1>
                <Suspense fallback={"Loading..."}>
                    <ProductsList categoryId={process.env.FEATURED_PRODUCTS_CATEGORIES_ID!} limit={4} />
                </Suspense>
            </div>
            <Suspense fallback={"Loading..."}>
                <CategoriesSection />
            </Suspense>
            <NewProductsList />
        </div>
    );
}
