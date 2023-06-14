import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/CartIcon";
import { styled } from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 50%;
    padding: 5px;
    font-size: 10px;
    
    background-color: ${({ theme }) => theme.colors.alert};
    color: ${({ theme }) => theme.colors.white};

    margin-left: -10px;
`

const Container = styled.div`
    position: relative;
`

export function CartControl() {
    const { value } = useLocalStorage('cart-items@caputeeno', [])

    return (
        <Container>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}