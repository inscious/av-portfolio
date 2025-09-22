import styled from "styled-components";

const Card = styled.div`
    border-radius: ${({ theme }) => theme.borderRadius.large};
    overflow: hidden;
    box-shadow: 0 10px 30px ${({ theme }) => theme.colors.boxShadow};
    transition: transform ${({ theme }) => theme.transitions.default},
        box-shadow ${({ theme }) => theme.transitions.default};
    background-color: ${({ theme }) => theme.colors.cardBackground};

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 35px ${({ theme }) => theme.colors.boxShadow};
    }
`;

export default Card;
