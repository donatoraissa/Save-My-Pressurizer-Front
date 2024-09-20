import { Container, Logout } from './styles';
import { ButtonText } from '../ButtonText';

import { useNavigate } from 'react-router-dom';

import {RiShutDownLine} from 'react-icons/ri'

import { useAuth } from '../../hooks/auth';

export function Navbar() {
  const navigate = useNavigate()

  const {signOut} = useAuth();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return(
    <Container>
      <h1>save my pressurizer</h1>
      
      <section>
        <ButtonText title='Home' onClick={() => navigate("/")} />
        <ButtonText title='Map' onClick={() => navigate("/map")} />
        <ButtonText title='Users' onClick={() => navigate("/users")} />
        <ButtonText title='Add user' onClick={() => navigate("/add")}  />

        <Logout onClick={handleSignOut}>
          <RiShutDownLine />
        </Logout>
      </section>
    </Container>
  )
}