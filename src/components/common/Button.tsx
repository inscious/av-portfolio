import styled from "styled-components";

const Button = styled.button<{ secondary?: boolean }>`
    display: inline-block;
    padding: 12px 30px;
    background-color: ${({ theme, secondary }) =>
        secondary ? "transparent" : theme.colors.primaryAccent};
    color: ${({ theme, secondary }) =>
        secondary ? theme.colors.primaryAccent : "white"};
    border-radius: ${({ theme }) => theme.borderRadius.round};
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: transform ${({ theme }) => theme.transitions.default},
        box-shadow ${({ theme }) => theme.transitions.default};
    border: ${({ theme, secondary }) =>
        secondary ? `2px solid ${theme.colors.primaryAccent}` : "none"};
    cursor: pointer;
    box-shadow: ${({ theme, secondary }) =>
        secondary ? "none" : `0 4px 15px rgba(0, 120, 255, 0.3)`};

    &:hover {
        transform: translateY(-3px);
        box-shadow: ${({ theme, secondary }) =>
            secondary
                ? `0 4px 15px rgba(0, 120, 255, 0.3)`
                : `0 8px 20px rgba(0, 120, 255, 0.4)`};
        background-color: ${({ theme, secondary }) =>
            secondary
                ? theme.colors.primaryAccent
                : theme.colors.primaryAccent};
        color: white;
    }
`;

export default Button;
