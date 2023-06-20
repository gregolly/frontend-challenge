import { ProductsFetchResponse } from "@/types/ProductsResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { allProductsQuery } from "./graphQlFilters";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

function fetcher(query: string): AxiosPromise<ProductsFetchResponse> {
    return axios.post(API_URL, { query } )
}

export function useAllProcuts() {
    const query = allProductsQuery()
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products'],
    })

    return {
        allProducts: data?.data.data.allProducts
    }
}