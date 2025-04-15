import { useEffect } from "react"
import useFetch from "../hooks/use-fetch";

export default function UseMemoHook() {

    const { data, loading, error } = useFetch('https://dummyjson.com/products');

    function filterProductByPrice(products) {
        return products?.length > 0 ? products.filter(item => item.price > 10) : [];
    }

    if (loading)
        return <h3>Loading.......</h3>

    return (
        <>
            <h1>Use memo hook example</h1>
            <ul>
                {
                    filterProductByPrice(data?.products).map(item =>
                        <li key={item.id}>{item.title}</li>
                    )
                }
            </ul>
        </>
    )
}