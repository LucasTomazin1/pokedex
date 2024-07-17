import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Montserrat", sans-serif;
        text-decoration: none;
        list-style: none;
        font-size: 10px;
    }
    a:hover {
        color: #535bf2;
    }
    body {
        display: flex;
        justify-content: center;
        min-width: 320px;
        min-height: 100vh;
        background-color: #121212;
        width: 100vw;
    }

    .normal { background-color: #A8A77A; }
    .fighting { background-color: #C22E28; }
    .flying { background-color: #A98FF3; }
    .poison { background-color: #A33EA1; }
    .ground { background-color: #E2BF65; }
    .rock { background-color: #B6A136; }
    .bug { background-color: #A6B91A; }
    .ghost { background-color: #735797; }
    .steel { background-color: #B7B7CE; }
    .fire { background-color: #ff1010; }
    .water { background-color: #6390F0; }
    .grass { background-color: #7AC74C; }
    .electric { background-color: #F7D02C; }
    .psychic { background-color: #F95587; }
    .ice { background-color: #96D9D6; }
    .dragon { background-color: #6F35FC; }
    .dark { background-color: #705746; }
    .fairy { background-color: #D685AD; }
    `;
