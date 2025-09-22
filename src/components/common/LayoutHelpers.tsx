import styled from "styled-components";

interface FlexProps {
    direction?: string;
    justify?: string;
    align?: string;
    gap?: string;
    wrap?: string;
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({ direction }) => direction || "row"};
    justify-content: ${({ justify }) => justify || "flex-start"};
    align-items: ${({ align }) => align || "stretch"};
    gap: ${({ gap }) => gap || "0"};
    flex-wrap: ${({ wrap }) => wrap || "nowrap"};
`;

interface GridProps {
    columns?: string;
    gap?: string;
}

export const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: ${({ columns }) => columns || "repeat(1, 1fr)"};
    gap: ${({ gap }) => gap || "1rem"};
`;
