import { ProductInCart } from "@/types/Product"
import { formatPrice } from "@/utils/formatPrice"
import { ChangeEvent } from "react"
import { styled } from "styled-components"
import { DeleteIcon } from "../icons/DeleteIcon"

interface CartItemProps {
    product: ProductInCart
    handleUpdateQuantity: (id: string, quantity: number) => void
    handleDelete: (id: string) => void
}

const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 210px;
    width: 100%;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.white};

    position: relative;
    
    button {
        position: absolute;
        top: 16px;
        right: 20px;
        cursor: pointer;
        border: none;
        background: transparent;
    }

    img {
        max-height: 100%;
        width: 250px;
        border-radius: 8px 0 0 8px;
    }

    > div {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        padding: 16px 24px;
        line-height: 150%;
        color: ${({ theme }) => theme.colors["text-dark-2"]};

        h4 {
            font-weight: 300;
            font-size: 20px;
        }

        p {
            font-weight: 400;
            font-size: 12px;
            max-height: 50%;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            span {
                font-weight: 600;
                font-size: 16px;
                color: ${({ theme }) => theme.colors["shapes-dark"]};
            }
        }
    }
`

const SelectQuantity = styled.select`
    font-size: 16px;
    font-weight: 400;
    padding: 8px;
    border: 1.5px solid ${({ theme }) => theme.colors["border-color"]};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors["bg-secondary"]};
    color: 1px solid ${({ theme }) => theme.colors["text-dark"]};
`

export function CartItem({ product, handleUpdateQuantity, handleDelete }: CartItemProps) {
    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        handleUpdateQuantity(product.id, Number(event.target.value))
    }

    return (
        <Item>
            <button onClick={() => handleDelete(product.id)} aria-label="Deletar">
                <DeleteIcon />
            </button>
            <img src={product.image_url} alt="" />

            <div>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <div>
                    <SelectQuantity value={product.quantity} onChange={handleChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </SelectQuantity>
                    <span>{formatPrice(product.prince_in_cents)}</span>
                </div>
            </div>
        </Item>
    )
}