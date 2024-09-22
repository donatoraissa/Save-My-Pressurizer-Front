import { styled } from "styled-components";

export const Container = styled.button`
  width: 56px;
  height: 56px;

  background: none;
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  border: 0;
  padding: 10px 10px;
  border-radius: 10px;

  font-weight: 700;

  &:disabled {
    opacity: 0.5;
  }
`;