import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
        color: #333;
    }

    a{
        font-family: "Noto Sans KR", sans-serif;
        text-decoration: none;
        display: block;
        color: #333;
    }

    ul, li{
        list-style: none;
    }

    body{
        letter-spacing: -1px;
        word-break: break-all;
        font-family: "Noto Sans KR", sans-serif;
        background-color: #fff;
    }

`;
