import styled from "styled-components";

const Section = styled.section`
    padding: 100px 0;
    position: relative;

    &:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 80px 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 60px 0;
    }
`;

export default Section;
