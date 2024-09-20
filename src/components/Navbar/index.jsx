import { Container, Logout } from './styles';
import { ButtonText } from '../ButtonText';

import { useNavigate } from 'react-router-dom';

import {RiShutDownLine} from 'react-icons/ri'

import { useAuth } from '../../hooks/auth';

export function Navbar() {
  const navigate = useNavigate()

  const {signOut} = useAuth();

  return(
    <Container>
      <h1>save my pressurizer</h1>
      
      <section>
        <ButtonText title='Home' onClick={() => navigate("/")} />
        <ButtonText title='Map' onClick={() => navigate("/map")} />
        <ButtonText title='Users' onClick={() => navigate("/users")} />
        <ButtonText title='Add user' onClick={() => navigate("/add")}  />

        <Logout onClick={signOut}>
          <RiShutDownLine />
        </Logout>
      </section>
    </Container>
  )
}