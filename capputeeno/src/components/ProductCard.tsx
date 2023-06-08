import { formatPrice } from "@/utils/formatPrice"
import { styled } from "styled-components"

interface ProductCardProps {
    image: string
    title: string
    price: number
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: rgba(255, 255, 255, 0.4);
    border-radius: 8px 8px 0px 0px;
    backdrop-filter: blur(10px);

    width: 256px;

    img {
        width: 256px;
        height: 300px;
        border-radius: 8px 8px 0px 0px;
    }

    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: ${({ theme }) => theme["text-dark-2"]};
    }

    strong {
        font-family: inherit;
        font-size: 14px;
        line-height: 150%;

        color: ${({ theme }) => theme["shapes-dark"]};
    }

    div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 0px;

        > div {
            width: 228px;
            height: 1px;
            margin: 8px 0;
            padding: 0px;
            background: ${({ theme }) => theme["shapes-2"]};
        }
    }
`

export function ProductCard(props: ProductCardProps) {      
    const price = formatPrice(props.price)
      
    return (
        <Card>
            <img src={props.image} alt="" />
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <strong>{price}</strong>
            </div>
        </Card>
    )
}