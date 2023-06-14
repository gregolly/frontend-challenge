import { styled } from "styled-components"
import { ArrowIcon } from "./icons/ArrowIcon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityTypes } from "@/types/priorityTypes"

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: ${({ theme }) => theme.colors["text-dark"]};

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }
`

const PriorityFilter = styled.ul`
    width: 250px;
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 999;

    list-style: none;

    top: 100%;

    li {
        color: ${({ theme }) => theme.colors["text-dark"]};
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }
`

export function FilterByPriority() {
    const [isOpen, setIsOpen] = useState(false)
    const { setPriority } = useFilter()

    function handleOpenPriorityFilter() {
        setIsOpen(prev => !prev)
    }

    function handleUpdatePriority(value: PriorityTypes) {
        setPriority(value)
        setIsOpen(false)
    }

    return (
        <FilterContainer>
            <button type="button" onClick={handleOpenPriorityFilter}>
                Organizar por
                <ArrowIcon />
            </button>
            { isOpen && 
                <PriorityFilter>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preco: Maior - menor</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preco: Menor - maior</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
                </PriorityFilter>
            }
        </FilterContainer>
    )
}