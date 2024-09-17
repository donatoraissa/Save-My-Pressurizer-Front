import { Container } from './styles';
import { ButtonText } from '../ButtonText';

export function Navbar() {
  return(
    <Container>
      <h1>save my pressurizer</h1>
      
      <section>
        <ButtonText title='Home' />
        <ButtonText title='Map' />
        <ButtonText title='Users' />
        <ButtonText title='Add user' />
      </section>
    </Container>
  )
}