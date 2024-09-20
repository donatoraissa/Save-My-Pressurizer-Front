import { forwardRef } from "react";
import { Container } from "./styles";

export const Input = forwardRef(({ icon: Icon, height = '56px', ...rest }, ref) => {
  return (
    <Container style={{ height }}>
      {Icon && <Icon size={20} />}
      <input ref={ref} {...rest} />
    </Container>
  );
});
