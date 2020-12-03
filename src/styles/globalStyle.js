import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.font};
        letter-spacing: 1px;
        color: ${({ theme }) => theme.colors.textColor};
    }

    *,
    *::after,
    *::before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    h1, h2 {
        margin-bottom: 3rem;
    }

    ul {
        list-style-type: none;
    }

    li {
        font-weight: 600;
    }

    button {
        background-color: inherit;
        border: none;
    }

    #root {
        display: flex;
    }
`;

export default GlobalStyle;