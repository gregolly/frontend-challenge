"use client"

import { useFilter } from "@/hooks/useFilter"
import { FilterTypes } from "@/types/FilterTypes"
import { styled } from "styled-components"

interface FilterItemProps {
    selected: boolean
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;
`

const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    color: ${({ theme }) => theme["text-dark"]};

    border-bottom: ${props => props.selected ? '4px solid #FFA585' : ""};
`

export function FilterByType() {
    const { type, setType } = useFilter()

    function handleChangeType(value: FilterTypes) {
        setType(value)
    }

    return (
        <FilterList>
            <FilterItem 
                onClick={() => handleChangeType(FilterTypes.ALL)} 
                selected={type === FilterTypes.ALL}
            >
                Todos os produtos
            </FilterItem>

            <FilterItem 
                onClick={() => handleChangeType(FilterTypes.SHIRT)} 
                selected={type === FilterTypes.SHIRT}
            >
                Camisetas
            </FilterItem>

            <FilterItem 
                onClick={() => handleChangeType(FilterTypes.MUG)} 
                selected={type === FilterTypes.MUG}
            >
                Canecas
            </FilterItem>
        </FilterList>
    )
}