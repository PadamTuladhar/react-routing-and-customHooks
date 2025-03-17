import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        setLoading(true);
        try {
            const response = await (await fetch(url, { ...options })).json();
            if (response) {
                setData(response);
                setLoading(false);
                setError(null);
            }
        } catch (e) {
            console.log('Error occured:');
            setLoading(false);
            setError(e);
        }


    }
    useEffect(() => {
        fetchData();
    }, [url])

    return {
        data,
        loading,
        error
    }
}