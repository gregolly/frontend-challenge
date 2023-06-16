"use client"

import { BackButton } from "@/components/BackButton"
import { DefaultPageLayout } from "@/components/DefaultPageLayout"
import { BagCartIcon } from "@/components/icons/BagCartIcon"
import { useProductParams } from "@/hooks/useProductsParams"
import { formatPrice } from "@/utils/formatPrice"
import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    section {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 32px;
        margin-top: 24px;

        img {
            max-width: 640px;
            width: 50%;
        }

        > div {
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            button {
                background: #115D8C;
                mix-blend-mode: multiply;
                border-radius: 4px;
                color: white;
                border: none;
                cursor: pointer;
                padding: 10px 0;
                text-align: center;
                font-size: 16px;
                font-weight: 500;
                text-transform: uppercase;

                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
        }
    }
`

const ProductInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: ${({ theme }) => theme.colors["text-dark-2"]};
    }

    h2 {
        font-weight: 300;
        font-size: 32px;
        line-height: 150%;
        color: ${({ theme }) => theme.colors["text-dark-2"]};
        margin-top: 12px;
    }

    span:nth-of-type(2) {
        font-weight: 600;
        font-size: 20px;
        color: ${({ theme }) => theme.colors["shapes-dark"]};
        margin-bottom: 24px;
    }

    p {
        font-weight: 400;
        font-size: 12px;
        color: ${({ theme }) => theme.colors["text-dark"]};
    }

    div {
        margin-top: 24px;
        h3 {
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors["text-dark"]};
            font-size: 16px;
            font-weight: 500;
        }

        p {
            font-weight: 400;
            font-size: 14px;
            color: ${({ theme }) => theme.colors["text-dark"]};
        }
    }
`



export default function Products({ searchParams }: { searchParams: { id: string }}) {
    const { data } = useProductParams(searchParams.id)

    function handleAddToCart() {
        let cartItems = localStorage.getItem('cart-items@caputeeno')
        if(cartItems) {
            let cartItemsArray = JSON.parse(cartItems)

            let existingProductIndex = cartItemsArray.findIndex((item: { id: string }) => 
            item.id === searchParams.id)

            if (existingProductIndex > -1) {
                cartItemsArray[existingProductIndex] = existingProductIndex.quantity += 1;
            } else {
                cartItemsArray.push({ ...data, quantity: 1, id: searchParams.id })
            }

            localStorage.setItem('cart-items@caputeeno', JSON.stringify(cartItemsArray))
        } else {
            const newCart = [
                {
                    ...data,
                    id: searchParams.id,
                    quantity: 1
                }
            ]
            localStorage.setItem('cart-items@caputeeno', JSON.stringify(newCart))
        }
    }

    return (
        <DefaultPageLayout>
            <Container>
                <BackButton navigate="/" />
                <section>
                    <img src={data?.image_url} />
                    <div>
                        <ProductInfo>
                            <span>{data?.category}</span>
                            <h2>{data?.name}</h2>
                            <span>{formatPrice(data?.prince_in_cents ?? 0)}</span>
                            <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                            <div>
                                <h3>Descrição</h3>
                                <p>{data?.description}</p>
                            </div>
                        </ProductInfo>
                        <button onClick={handleAddToCart}>
                            <BagCartIcon />
                            Adicionar ao carrinho
                        </button>
                    </div>
                </section>
            </Container>
        </DefaultPageLayout>
    )
}