import styled from "styled-components";

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 0 1.5rem;
    }
`;

export default Container;
