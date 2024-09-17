import { Container, Form, Footer } from './styles';

import { FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Save My Pressurizer</h1>

        <h2>Crie sua conta</h2>

        <Input placeholder='Nome' icon={FiUser}/>
        <Input placeholder='E-mail' icon={FiMail}/>
        <Input placeholder='Senha' icon={FiLock}/>
        <Input placeholder='Confirmar a senha' icon={FiLock}/>

        <Button title='Cadastrar' />

        <Footer>
          <p>Já tem uma conta?</p>
          <a href="/">Entrar</a>
        </Footer>
      </Form>
    </Container>
  )
}