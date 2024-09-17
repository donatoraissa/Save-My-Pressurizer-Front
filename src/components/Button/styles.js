import { styled } from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.WHITE};

  border: 0;
  padding: 0 16px;
  border-radius: 10px;

  font-weight: 700;

  &:disabled {
    opacity: 0.5;
  }
`;