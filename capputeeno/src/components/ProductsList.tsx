"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./ProductCard"
import { styled } from "styled-components"

import { Product } from "@/types/Product"

import { Pagination } from "./Pagination"
import { useState } from "react"

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;
    margin-top: 32px;
`

export function ProductsList() {
    const [currentPage, setCurrentPage] = useState(1)

    const { data } = useProducts(currentPage, 12)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    function handlePageChangeArrow(page: number, direction?: string) {
        setCurrentPage(page)
    }

    return (
        <>
            <Pagination 
                currentPage={currentPage} 
                onClickPagination={handlePageChange} 
                onClickPaginationArrow={handlePageChangeArrow}
            />

            <ListContainer>
                {data?.map((product: Product) =>
                    <ProductCard  
                        key={product.id}
                        title={product.name}
                        image={product.image_url}
                        price={product.prince_in_cents}
                        id={product.id}
                    />
                )}
            </ListContainer>

            <Pagination 
                currentPage={currentPage} 
                onClickPagination={handlePageChange} 
                onClickPaginationArrow={handlePageChangeArrow}
            />
        </>
    )
}