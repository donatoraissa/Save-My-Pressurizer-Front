import { styled } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

import backgroundImg from '../../assets/background.png';

export const Content = styled.div`
  height: fit-content;

  display: flex;
  align-items: stretch;
`;

export const Questions = styled.div`
  padding: 50px 136px;
  width: 60%;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: justify;
  > div {
    > h1 {
      font-size: 48px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-bottom: 30px;
    }    
  }

  > div {
    > p {
      font-size: 30px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-bottom: 20px;
    }
  }

  @media ${breakpoints.bigMobile}{
    width: 60%;
  }

  @media ${breakpoints.smlMobile}{
    width: 70%;
  }
`;

export const Backgroung = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;