import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 200px;
  background-color: #36a9cc;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -10px;
  margin-bottom: -10px;
  @media (max-width: 100%) {
    padding: 1px;
    margin-top: 110px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: "100%";
  margin: 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 15px;
  text-decoration: none;
  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;
export const Extra = styled.a`
color:#fff
margin-bottom:2px;
font-size:10px;}`;

export const Title = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;
