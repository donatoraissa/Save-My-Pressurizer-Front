import { useState } from 'react';

import { Container, Form, Footer } from './styles';

import { FiLock, FiMail } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignIn() {
    signIn({email, password})
  }
  return (
    <Container>
      <Form>
        <h1>Save My Pressurizer</h1>

        <h2>Faça seu login</h2>

        <Input
          placeholder='E-mail'
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder='Senha'
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title='Entrar' onClick={handleSignIn}/>

        <Footer>
          <p>Não tem uma conta?</p>
          <a href="/register">Cadastre-se</a>
        </Footer>
      </Form>
    </Container>
  )
}