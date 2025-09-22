import styled from "styled-components";

interface ProgressBarProps {
    percent: number;
}

const ProgressBar = styled.div<ProgressBarProps>`
    height: 8px;
    background-color: ${({ theme }) => theme.colors.lineColor};
    border-radius: 4px;
    overflow: hidden;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: ${({ percent }) => `${percent}%`};
        border-radius: 4px;
        background: linear-gradient(
            to right,
            ${({ theme }) => theme.colors.primaryAccent},
            ${({ theme }) => theme.colors.secondaryAccent}
        );
        animation: fillProgress 1.5s ease-out forwards;
    }

    @keyframes fillProgress {
        from {
            width: 0;
        }
        to {
            width: ${({ percent }) => `${percent}%`};
        }
    }
`;

export default ProgressBar;
