import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};

    .scrollYHidden {
        overflow-y: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .scrollXHidden {
        overflow-x: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none;
        }
    }

    :root {
        --font-regular: "GmarketSansMedium";
        --font-light: "GmarketSansLight";
        --font-bold: "GmarketSansBold";

        --color-primary: #06AE53;
        --color-primary-light: #F0F9F4;

        --color-grey: #DCDCDC;
        --color-grey-light: #F3F3F3;

        --color-white: #FFFFFF;
    }
`;

export default GlobalStyle;
