import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }
    
    body {
        font-family: montserrat, sans-serif;
        line-height: 1.7;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
    
    h1 {
        font-size: 20px;
    }
    
    textarea, input {
        width: 500px;
        birder: 2px solid black;
        resize: none;
    }
    
    button {
        border-radius: 5px;
        padding: 10px 20px;
        border: none;
        font-weight: bold;
        cursor: pointer;
    }
    
    ul {
        list-style: none;
    }
    
    nav a {
        margin-right: 20px;
    }
`;


export default GlobalStyle;
