"use client"

import { useFilter } from "@/hooks/useFilter"
import { FilterType } from "@/types/filterTypes"
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
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    color: ${({ theme }) => theme.colors["text-dark"]};

    border-bottom: ${props => props.selected ? '4px solid #FFA585' : ""};

    @media (min-width: ${({ theme }) => theme.MediaQueryList.desktop}) {
        font-size: 16px;
        line-height: 22px;
    }
`

export function FilterByType() {
    const { type, setType } = useFilter()

    function handleChangeType(value: FilterType) {
        setType(value)
    }

    return (
        <FilterList>
            <FilterItem 
                onClick={() => handleChangeType(FilterType.ALL)} 
                selected={type === FilterType.ALL}
            >
                Todos os produtos
            </FilterItem>

            <FilterItem 
                onClick={() => handleChangeType(FilterType.SHIRT)} 
                selected={type === FilterType.SHIRT}
            >
                Camisetas
            </FilterItem>

            <FilterItem 
                onClick={() => handleChangeType(FilterType.MUG)} 
                selected={type === FilterType.MUG}
            >
                Canecas
            </FilterItem>
        </FilterList>
    )
}