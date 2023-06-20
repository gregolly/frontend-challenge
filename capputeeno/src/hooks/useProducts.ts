import { ProductsFetchResponse } from "@/types/ProductsResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { mountQuery } from "@/utils/graphQlFilters";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

function fetcher(query: string): AxiosPromise<ProductsFetchResponse> {
    return axios.post(API_URL, { query })
}

export function useProducts(page: number, limit: number) {
    const { type, priority, search } = useFilter()
    const searchDeffered = useDeferredValue(search)
    const query = mountQuery(type, priority, page, limit)
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority, page],
        staleTime: 1000 * 60 * 1
    })

    const products = data?.data?.data?.allProducts
    const filteredProducts = products?.filter(product => 
        product.name.toLowerCase().includes(searchDeffered.toLowerCase())
    )

    return {
        data: filteredProducts
    }
}