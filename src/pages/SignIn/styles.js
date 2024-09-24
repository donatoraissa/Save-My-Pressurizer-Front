import { styled } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 500px;
  height: fit-content;
  padding: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 15px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: 48px;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    display: flex;
    align-self: baseline;
    margin-bottom: 20px;
    color: red;
  }

  @media ${breakpoints.bigMobile}{
    width: 400px;
    height: fit-content;
    padding: 60px;  
  }

  @media ${breakpoints.smlMobile}{
    width: 300px;
    height: 500px;
    padding: 40px;

    > h1 {
      font-size: 36px;
    }

    > h2 {
      font-size: 24px;
      margin: 30px 0;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;

  margin-top: 24px;

  > p {
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-weight: 600;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-weight: 700;
  }

  @media ${breakpoints.smlMobile}{
    flex-direction: column;
  }
`;