import { useState, useEffect } from "react";
import { ProductType } from "@/types";

export const useFetch = (url: string) => {
    const [fetchedData, setFetchedData] = useState<ProductType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<unknown>(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url)
                if(!response.ok) throw new Error(response.statusText)
                const json = await response.json();
                setIsLoading(false)
                setFetchedData(json)
                setError('')
            } catch (error) {
                setError(error)
                setIsLoading(false)
            }
        };
        fetchData()
    }, [url])

    return {fetchedData, isLoading, error}
}