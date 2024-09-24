import { styled } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.header`
display: flex;
align-items: center;
justify-content: space-between;

grid-area: navbar;

height: 105px;
width: 100%;

padding: 0 80px;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

> h1 {
  font-size: 36px;
  padding: 0 30px 0 0;
}

> section {
  font-size: 25px;
  display: flex;
  align-items: center;
  gap: 60px;
}

@media ${breakpoints.bigMobile}{
  padding: 0 20px;

  > h1 {
    font-size: 28px;
    padding: 0 40px;
  }

  > section {
    font-size: 18px;
    gap: 50px;
  }
}

@media ${breakpoints.smlMobile}{
  padding: 0 10px;

  > h1 {
    font-size: 24px;
    padding: 0 40px;
  }

  > section {
    font-size: 14px;
    gap: 30px;
  }
}
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 25px;
  }
`;
