import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.6;
    overflow-x: hidden;
    transition: background-color 0.3s ease;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3rem;
    letter-spacing: -1px;
  }

  h2 {
    font-size: 2.5rem;
    letter-spacing: -0.5px;
    margin-bottom: 2rem;
    position: relative;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  a {
    color: ${({ theme }) => theme.colors.primaryAccent};
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.secondaryAccent};
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    .section {
      padding: 60px 0;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export default GlobalStyles;
