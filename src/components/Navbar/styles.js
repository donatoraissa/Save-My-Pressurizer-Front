import { styled } from "styled-components";

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
  font-size: 40px;
}

> section {
  font-size: 25px;
  display: flex;
  align-items: center;
  gap: 80px;
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
