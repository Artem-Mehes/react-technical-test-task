import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 1px;
    }

    *,
    *::after,
    *::before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    h1 {
        margin: 2rem 0;
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

    #root {
        display: flex;
    }
`;

export default GlobalStyle;