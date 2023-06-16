import { ProductFetchResponse } from "@/types/Product";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

function fetcher(productId: string): AxiosPromise<ProductFetchResponse> {
    return axios.post(API_URL, { query: `
        query {
            Product(id: "${productId}") {
                name
                description
                category
                price_in_cents
                image_url
            }
        }
    ` })
}

export function useProductParams(id: string) {
    const { data } = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['product', id],
        enabled: !!id,
        staleTime: 1000 * 60 * 5
    })

    return {
        data: data?.data?.data?.Product
    }
}