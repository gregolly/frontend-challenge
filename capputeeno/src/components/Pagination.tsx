import { useAllProcuts } from "@/utils/getAllProducts";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";
import { styled } from "styled-components";

interface PaginationProps {
    currentPage: number
    onClickPagination: (page: number) => void
    onClickPaginationArrow: (page: number, direction?: string) => void
}

const PageListContainer = styled.ul`
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    display: inline-flex;
    margin: 24px 0;
    padding: 0 16px;

    gap: 2px;

    li {
        list-style: none;
        background-color: var(--color-gray-500);

        color: var(--color-gray-600);
        font-size: 16px;
        padding: 8px 16px;
        border-radius: 8px;

        cursor: pointer;

        &:hover, &[data-page="active"]  {
            background-color: var(--color-gray-100);
            color: ${({ theme }) => theme.colors["orange-low"]};
            border: 1px solid ${({ theme }) => theme.colors["orange-low"]};
        }
    }
`;

const ArrowsContainer = styled.div`
    display: flex;
    margin-left: 6px;
    justify-content: flex-end;
    align-items: center;
    
    gap: 2px;

    li {
            list-style: none;
            background-color: var(--color-gray-500);

            color: var(--color-gray-600);
            font-size: 16px;
            padding: 8px 16px;
            border-radius: 8px;
            cursor: pointer;

            &:hover {
                background-color: var(--color-gray-100);
                color: ${({ theme }) => theme.colors["orange-low"]};
                border: 1px solid ${({ theme }) => theme.colors["orange-low"]};
            }

            &[data-state="deactive"] {
                opacity: 0.6;
                cursor: not-allowed;

                &:hover {
                    background-color: var(--color-gray-500);
                    color: var(--color-gray-600);
                    border: none;
                }

            }
        }
`;


export function Pagination({ 
    currentPage, onClickPagination, onClickPaginationArrow
}: PaginationProps) {

    const { allProducts } = useAllProcuts()
    
    let paginationCount = Math.ceil(allProducts?.length || 0 / 12)
    let paginationArray = [];

    for(let i = 0; i < paginationCount; i++) {
        paginationArray.push(i + 1);
    }

    function handlePageChange(page: number) {
        onClickPagination(page)
    }

    function leftArrowClick() {
        if(currentPage > 1) {
            onClickPaginationArrow((currentPage - 1), 'left')
        }
    };

    function rightArrowClick() {
        if(currentPage < paginationCount) {
            onClickPaginationArrow((currentPage + 1), 'right')
        }
    };

    return (
        <PageListContainer>
            {paginationArray.map((item: number) => {
                return (
                    <li
                        key={item}
                        onClick={() => handlePageChange(item)}
                        data-page={currentPage === item && "active"}
                    >
                        {item}
                    </li>
                )
            })}

            <ArrowsContainer>
                <li 
                    onClick={() => leftArrowClick()}
                    data-state={ currentPage < 2 && "deactive" }
                >
                    <CaretLeft size={12} />
                </li>

                <li
                    onClick={() => rightArrowClick()}
                    data-state={ currentPage === paginationCount && "deactive" }
                >
                    <CaretRight size={12} />
                </li>
            </ArrowsContainer>
        </PageListContainer>
    )
}