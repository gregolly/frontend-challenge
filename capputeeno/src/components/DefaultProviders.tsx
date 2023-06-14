"use client"

import { FilterContextProvider } from "@/contexts/filterContext";
import { defaultTheme } from "@/styles/themes/default";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
    children: ReactNode
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
    const client = new QueryClient()

    return (
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={defaultTheme}>
                    { children }
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
}