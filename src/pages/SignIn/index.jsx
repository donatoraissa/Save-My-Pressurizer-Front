import { Container, Form, Footer } from './styles';

import { FiLock, FiMail } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Save My Pressurizer</h1>

        <h2>Faça seu login</h2>

        <Input placeholder='E-mail' icon={FiMail}/>
        <Input placeholder='Senha' icon={FiLock}/>

        <Button title='Entrar' />

        <Footer>
          <p>Não tem uma conta?</p>
          <a href="/register">Cadastre-se</a>
        </Footer>
      </Form>
    </Container>
  )
}