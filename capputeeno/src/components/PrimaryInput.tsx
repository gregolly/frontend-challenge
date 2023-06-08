"use client"

import { styled } from "styled-components";
import { SearchIcon } from "./icons/SearchIcon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 352px;
    padding: 10px 16px;
    border-radius: 8px;
    border: 0;
    background-color: ${({ theme }) => theme['bg-secondary']};

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${({ theme }) => theme['text-dark']};

    &::placeholder {
        font-family: inherit;
    }
`

const InputContainer = styled.div`
    position: relative;
    width: width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
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