import { Container, Logout } from './styles';
import { ButtonText } from '../ButtonText';

import { useNavigate } from 'react-router-dom';

import {RiShutDownLine} from 'react-icons/ri'

import { useAuth } from '../../hooks/auth';

export function Navbar() {
  const navigate = useNavigate()

  const {signOut} = useAuth();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return(
    <Container>
      <h1>save my pressurizer</h1>
      
      <section>
        <ButtonText title='Início' onClick={() => navigate("/")} />
        <ButtonText title='Mapa' onClick={() => navigate("/map")} />
        <ButtonText title='Clientes' onClick={() => navigate("/users")} />
        <ButtonText title='Adicionar cliente' onClick={() => navigate("/add")}  />

        <Logout onClick={handleSignOut}>
          <RiShutDownLine />
        </Logout>
      </section>
    </Container>
  )
}