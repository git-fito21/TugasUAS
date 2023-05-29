import styled from "styled-components";

export const MainAlbums = styled.div`
  display: contents;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const DivAlbums = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  margin-top: -250px;
  div {
    background: rgb(235,236,237);
    background: linear-gradient(90deg, rgba(235,236,237,0.9871589085072231) 0%, 
    rgba(2,147,2,1) 0%, rgba(72,74,72,1) 0%, rgba(2,7,52,1) 0%, rgba(44,67,238,1) 0%, rgba(40,131,218,1) 0%, 
    rgba(154,154,156,1) 0%, rgba(198,199,200,1) 0%, rgba(101,179,255,1) 0%, rgba(99,171,244,1) 100%, rgba(109,171,255,1) 100%, 
    rgba(118,163,254,1) 100%, rgba(108,126,252,1) 100%, rgba(200,201,201,1) 100%, rgba(174,175,174,1) 100%, rgba(175,176,181,1) 100%, 
    rgba(179,180,181,1) 100%, rgba(212,214,215,1) 100%, rgba(187,188,191,1) 100%, rgba(197,197,198,1) 100%, rgba(191,190,190,1) 100%);
    border: 2px solid transparent;
    border-radius: 13px;
    min-height: 320px;
    width: 20%;
    overflow: hidden;
    flex-wrap: wrap;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 13px;
    color: white;
    align-items: center;
    padding: 5px;
    margin-bottom: 50px;

    a {
      color: white;
      font-weight: bold;
    }

    a:hover {
      color: black;
    }

    img {
      border: 2px solid transparent;
      border-radius: 10%;
    }
  }

  @media (max-width: 890px) {
    width: 100%;

    div {
      width: 40%;
    }
  }

  @media (max-width: 495px) {
    div {
      width: 60%;
    }
  }
`;
