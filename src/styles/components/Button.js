import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 50px;
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: white;
  background-color: black;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  outline: none;
  margin-top: 1rem;

  :hover {
    background: rgb(235,236,237);
    background: linear-gradient(90deg, rgba(235,236,237,0.9871589085072231) 0%, rgba(2,147,2,1) 0%,
    rgba(72,74,72,1) 0%, rgba(2,7,52,1) 0%, rgba(44,67,238,1) 0%, rgba(40,131,218,1) 0%, 
    rgba(154,154,156,1) 0%, rgba(198,199,200,1) 0%, rgba(101,179,255,1) 0%, rgba(159,159,159,1) 0%, rgba(197,197,198,1) 100%, 
    rgba(99,171,244,1) 100%, rgba(109,171,255,1) 100%, rgba(118,163,254,1) 100%, rgba(108,126,252,1) 100%, rgba(200,201,201,1) 100%, 
    rgba(174,175,174,1) 100%, rgba(175,176,181,1) 100%, rgba(179,180,181,1) 100%, rgba(212,214,215,1) 100%, rgba(187,188,191,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f1f1ff",endColorstr="#1fbbff",GradientType=1);
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: white;
  }
`;
