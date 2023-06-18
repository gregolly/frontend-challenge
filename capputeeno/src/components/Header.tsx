"use client"

import { styled } from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWithSearchIcon } from "./PrimaryInput"

import { CartControl } from "./CartControl"
import { useFilter } from "@/hooks/useFilter"

const sairaStencilOne = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

    @media (min-width: 768px) {
        padding: 20px 160px;
    }
`

const Logo = styled.a`
    color: ${({ theme }) => theme.colors["logo-color"]};
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    text-decoration: none;

    @media (min-width: ${({ theme }) => theme.MediaQueryList.desktop}) {
        font-size: 24px;
    }

    @media (min-width: ${({ theme }) => theme.MediaQueryList.tablet}) {
        font-size: 40px;
    }
`

export function Header() {
    const { search, setSearch } = useFilter()
    return (
        <TagHeader>
            <Logo className={sairaStencilOne.className} href="/">Capputeeno</Logo>
            <div>
                <PrimaryInputWithSearchIcon
                    value={search}
                    handleChange={setSearch}
                    placeholder="Procurando por algo especifico?"
                />
                <CartControl />
            </div>
        </TagHeader>
    )
}