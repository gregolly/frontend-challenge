"use client"

import { styled, useTheme } from "styled-components";
import { SearchIcon } from "./icons/SearchIcon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 100%;
    padding: 10px 16px;
    border-radius: 8px;
    border: 0;
    background-color: ${({ theme }) => theme.colors['bg-secondary']};

    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors['text-dark']};

    &::placeholder {
        font-family: inherit;
    }

    @media (min-width: ${({ theme }) => theme.MediaQueryList.desktop}) {
        font-sizeL: 14px;
        line-height: 22px;
    }
`

const InputContainer = styled.div`
    position: relative;
    width: 250px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (min-width: ${({ theme }) => theme.MediaQueryList.desktop}) {
        width: 352px;
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string
    handleChange: (value: string) => void
}

export function PrimaryInputWithSearchIcon(props: InputProps) {
    return (
        <InputContainer>
            <PrimaryInput 
                onChange={(event) => props.handleChange(event.target.value)} 
                {...props} 
            />
            <SearchIcon />
        </InputContainer>
    )
}