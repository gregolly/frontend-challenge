import { Product } from "./Product"

export interface ProductPagination {
    page: number
    limit: number
    options: any
}

export interface ProductsFetchResponse {
    data: {
        allProducts: Product[]
        totalPages: number
    }
}