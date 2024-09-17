import { Container } from './styles';

import { FaFaucet } from 'react-icons/fa'

export function Splash() {
  return (
    <Container>
      <FaFaucet size={200}/>
      <h1>save my pressurizer</h1>
    </Container>
  )
}