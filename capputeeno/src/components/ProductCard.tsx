import { formatPrice } from "@/utils/formatPrice"
import { useRouter } from "next/navigation"
import { styled } from "styled-components"
import { Divider } from "./Divider"

interface ProductCardProps {
    image: string
    title: string
    price: number
    id: string
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

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
        padding: 8px 12px;
        width: 100%;
    }
`

export function ProductCard(props: ProductCardProps) {  
    const router = useRouter()
    const price = formatPrice(props.price)

    function handleNavigate() {
        router.push("/product?id=" + props.id)
    }
      
    return (
        <Card onClick={handleNavigate}>
            <img src={props.image} alt="" />
            <div>
                <h3>{props.title}</h3>
                <Divider />
                <strong>{price}</strong>
            </div>
        </Card>
    )
}