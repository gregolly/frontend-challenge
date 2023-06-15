"use client"

import { FilterBar } from '@/components/FilterBar'
import { ProductsList } from '@/components/ProductsList'
import { styled } from 'styled-components'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  min-height: 100vh;
  background-color: #F0F0F5;

  @media (min-width: ${({ theme }) => theme.MediaQueryList.desktop}) {
    padding: 34px 160px;
  }
`

export default function Home() {

  return (
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
  )
}
