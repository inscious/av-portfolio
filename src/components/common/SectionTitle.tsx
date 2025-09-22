import styled from "styled-components";

const SectionTitle = styled.h2`
    position: relative;
    margin-bottom: 2.5rem;

    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 60px;
        height: 4px;
        background: ${({ theme }) => theme.colors.primaryAccent};
        border-radius: 2px;
    }
`;

export default SectionTitle;
