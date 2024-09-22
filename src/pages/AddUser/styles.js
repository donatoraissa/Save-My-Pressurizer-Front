import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "navbar"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 150px 80px;;
  }
`;

export const ContentForm = styled.form`
  max-width: 550px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 450px);
  grid-template-rows: repeat(5, fit-content);

  gap: 50px;
  justify-content: center;

  > footer {
    width: 950px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    > div:nth-child(1) {
    margin-top: 24px;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`