"use client"

import { BackButton } from "@/components/BackButton";
import { DefaultPageLayout } from "@/components/DefaultPageLayout";
import { Divider } from "@/components/Divider";
import { CartItem } from "@/components/cart/CartItem";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/Product";
import { formatPrice } from "@/utils/formatPrice";
import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    @media (min-width: ${({ theme }) => theme.MediaQueryList.desktop}) {
        flex-direction: row;
    }
`

const CartListContainer = styled.div`
    h3 {
        margin-top: 24px;
        font-size: 24px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 150%;
        color: ${({ theme }) => theme.colors["text-dark-2"]};
    }

    p {
        font-size: 16px;
        font-weight: 300;
        line-height: 150%;
        color: ${({ theme }) => theme.colors["text-dark-2"]};

        span {
            font-weight: 600;
        }
    }
`

const CartList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
`

const CartResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 352px;
    padding: 16px 24px;

    background-color: white;
    height: 100%;

    h3 {
        font-weight: 600;
        font-size: 20px;
        color: ${({ theme }) => theme.colors["text-dark-2"]};
        text-transform: uppercase;
        margin-bottom: 30px;
    }
`

const TotalItem = styled.div<{ isBold: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    font-size: 16px;
    font-weight: ${(props => props.isBold ? '600' : '400')};
    line-height: 150%;

    margin-bottom: 12px;
`

const ShopButton = styled.button`
    color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.others};
    width: 100%;
    padding: 12px;
    border: none;
    margin-top: 40px;
    cursor: pointer;
`

export default function CartPage() {
    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>('cart-items@caputeeno', [])

    function calculateTotal(value: ProductInCart[]) {
        return value.reduce((sum, item) => sum += (item.prince_in_cents * item.quantity), 0)
    }
    const cartTotal = calculateTotal(value)
    const deliveryFee = 4000
    const cartTotalWithDelivery = formatPrice(calculateTotal(value) + deliveryFee)

    function handleUpdateQuantity(id: string, quantity: number) {
        const newValue = value.map(item => {
            if(item.id !== id) return item
            return { ...item, quantity: quantity }
        })
        updateLocalStorage(newValue)
    }

    function handleDeleteItem(id: string) {
        const newValue = value.filter(item => {
            if(item.id !== id) return item
        })
        updateLocalStorage(newValue)
    }

    return (
        <DefaultPageLayout>
            <Container>
                <CartListContainer>
                <BackButton navigate="/" />
                    <h3>Seu carrinho</h3>
                    <p>
                        Total { value.length } produtos
                        <span>{formatPrice(cartTotal)}</span>
                    </p>
                    <CartList>
                        {value.map(item => 
                        <CartItem 
                            product={item} 
                            key={item.id} 
                            handleUpdateQuantity={handleUpdateQuantity}
                            handleDelete={handleDeleteItem} 
                        />)}
                    </CartList>
                </CartListContainer>
                <CartResultContainer>
                    <h3>Resumo do pedido</h3>
                    <TotalItem isBold={false}>
                        <p>Subtotal de produtos</p>
                        <p>{cartTotal}</p>
                    </TotalItem>
                    <TotalItem isBold={false}>
                        <p>Entrega</p>
                        <p>{formatPrice(deliveryFee)}</p>
                    </TotalItem>
                    <Divider />
                    <TotalItem isBold>
                        <p>Total</p>
                        <p>{cartTotalWithDelivery}</p>
                    </TotalItem>
                    <ShopButton>Finalizar a compra</ShopButton>
                </CartResultContainer>
            </Container>
        </DefaultPageLayout>
    )
}