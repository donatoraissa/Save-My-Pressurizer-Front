import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  
  gap: 30px;
  
  > h1 {
    width: 500px;
    font-size: 100px;
    text-align: center;
  }
`;
