"use client"

import { Header } from '@/components/Header'
import './globals.css'
import { Saira } from 'next/font/google'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/themes/default'
import { FilterContextProvider } from '@/contexts/filterContext'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
          <ThemeProvider theme={defaultTheme}>
            <body className={saira.className}>
              <FilterContextProvider>
                <Header />
                {children}
              </FilterContextProvider>
            </body>
          </ThemeProvider>
      </html>
  )
}