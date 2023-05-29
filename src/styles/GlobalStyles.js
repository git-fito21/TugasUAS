import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
  }

  html,	body {
    background: rgb(235,236,237);
background: linear-gradient(90deg, rgba(235,236,237,0.9871589085072231) 0%, rgba(57,122,252,1) 0%, rgba(0,7,20,1) 0%, rgba(2,147,2,1) 0%, rgba(72,74,72,1) 0%, rgba(2,7,52,1) 0%, rgba(44,67,238,1) 0%, rgba(40,131,218,1) 0%, rgba(47,123,208,1) 52%, rgba(83,181,255,1) 100%, rgba(1,4,32,1) 100%, rgba(33,35,56,1) 100%, rgba(121,121,121,1) 100%, rgba(3,156,8,1) 100%, rgba(0,3,9,1) 100%, rgba(113,136,182,1) 100%, rgba(87,134,229,1) 100%, rgba(113,145,208,1) 100%, rgba(165,166,168,1) 100%, rgba(198,199,200,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f1f1ff",endColorstr="#1fbbff",GradientType=1);
    margin: 0px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #cacecc #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #cacecc;
    border-radius: 10px;
    border: 2px solid #ffffff;
  }
  
`;

export default GlobalStyles;
