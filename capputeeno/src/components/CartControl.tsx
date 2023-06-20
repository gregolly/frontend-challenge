import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/CartIcon";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";

const Container = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
`

const CartCount = styled.div`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 5px;
    font-size: 10px;
    
    background-color: ${({ theme }) => theme.colors.alert};
    color: ${({ theme }) => theme.colors.white};

    margin-left: -10px;
`

export function CartControl() {
    const router = useRouter()
    const { value } = useLocalStorage('cart-items@caputeeno', [])

    function handleNavigateToCart() {
        router.push("/cart")
    }

    return (
        <Container onClick={handleNavigateToCart}>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}