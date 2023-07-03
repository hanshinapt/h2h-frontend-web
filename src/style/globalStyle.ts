import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};

    :root {
        --color-primary: #06AE53;
    }
`;

export default GlobalStyle;
