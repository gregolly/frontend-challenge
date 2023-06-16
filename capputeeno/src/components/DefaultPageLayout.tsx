"use client"

import { styled } from "styled-components"

export const DefaultPageLayout = styled.div`
    padding: 12px 24px;
    min-height: 100vh;
    background-color: #F0F0F5;

    @media (min-width: ${({ theme }) => theme.MediaQueryList.desktop}) {
        padding: 34px 160px;
    }
`