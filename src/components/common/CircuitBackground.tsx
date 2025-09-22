import styled from "styled-components";

interface CircuitBackgroundProps {
    position?: "top-left" | "bottom-right";
}

const CircuitBackground = styled.div<CircuitBackgroundProps>`
    position: absolute;
    width: 600px;
    height: 600px;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%230078FF' stroke-width='1' stroke-opacity='0.05' d='M0,50 L100,50 M50,0 L50,100 M17,17 L83,83 M17,83 L83,17'/%3E%3Ccircle cx='50' cy='50' r='40' stroke='%230078FF' stroke-width='1' stroke-opacity='0.05' fill='none'/%3E%3Ccircle cx='50' cy='50' r='10' fill='%230078FF' fill-opacity='0.05'/%3E%3C/svg%3E");
    z-index: 0;
    opacity: 0.5;
    ${({ position }) =>
        position === "bottom-right" &&
        `
    bottom: -300px;
    right: -300px;
  `}
    ${({ position }) =>
        position === "top-left" &&
        `
    top: -300px;
    left: -300px;
  `}
`;

export default CircuitBackground;
