import { styled } from "styled-components"
import { ComeBack } from "./icons/ComeBack"
import { useRouter } from "next/navigation"

const Back = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.text};

    background: transparent;
    border: none;
    cursor: pointer;
`

interface BackButtonProps {
    navigate: string
}

export function BackButton({ navigate }: BackButtonProps) {
    const router = useRouter()

    function handleNavigate() {
        router.push(navigate)
    }
    return (
        <Back onClick={handleNavigate}>
            <ComeBack />
            Voltar
        </Back>
    )
}