import { styled } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "navbar"
  "content";

  
`;

export const ContentForm = styled.form`
  max-width: 550px;
  margin: auto;
  padding: 50px 30px;

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

  @media ${breakpoints.tablet}{
    grid-template-columns: repeat(2, 300px);
    grid-template-rows: repeat(5, fit-content);

    > footer {
      width: 650px;
    }
  }

  @media ${breakpoints.bigMobile}{
    grid-template-columns: repeat(1, 450px);
    grid-template-rows: repeat(5, fit-content);

    > footer {
      width: 450px;
    }
  }

  @media ${breakpoints.smlMobile}{
    grid-template-columns: repeat(1, 300px);
    grid-template-rows: repeat(5, fit-content);

    gap: 30px;

    > footer {
      width: 300px;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    color: red;
  }
`