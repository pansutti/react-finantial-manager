import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  text-align: center;
  background: black;

  @media (max-width: 375px) {
    height: 150px;
    width: 100%;
    text-align: center;
    background: black;
  }

  @media (max-width: 320px) {
    height: 150px;
    width: 100%;
    text-align: center;
    background: black;
  }
`;

export const Header = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 45px;
`;

export const Title = styled.div`
  padding-top: 20px;
  color: #fff;
`;