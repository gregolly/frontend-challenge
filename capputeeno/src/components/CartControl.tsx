import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./CartIcon";
import { styled } from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 50%;
    padding: 5px;
    font-size: 10px;
    
    background-color: ${({ theme }) => theme.alert};
    color: ${({ theme }) => theme.white};

    margin-left: -10px;
`

const Container = styled.div`
    position: relative;
`

export function CartControl() {
    const { value } = useLocalStorage('cart-items@caputeeno')

    return (
        <Container>
            <CartIcon />
            {value.length && <CartCount>{value}</CartCount>}
        </Container>
    )
}