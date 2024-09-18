import { styled } from "styled-components";

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
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.COLORS.RED};
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
`;