import { Container } from './styles';
import { ButtonText } from '../ButtonText';

import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate()

  return(
    <Container>
      <h1>save my pressurizer</h1>
      
      <section>
        <ButtonText title='Home' onClick={() => navigate("/")} />
        <ButtonText title='Map' onClick={() => navigate("/map")} />
        <ButtonText title='Users' onClick={() => navigate("/users")} />
        <ButtonText title='Add user' onClick={() => navigate("/add")}  />
      </section>
    </Container>
  )
}