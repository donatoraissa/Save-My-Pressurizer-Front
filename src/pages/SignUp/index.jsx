import { FiLock, FiMail, FiUser } from 'react-icons/fi';

import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Container, Form, Footer } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const signUpSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório!"),
  email: z.string().email("Insira um e-mail válido!"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres!"),
  confirm_password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres!"),
}).refine((data) => data.password === data.confirm_password, {
  message: "As senhas devem ser iguais!",
  path: ["confirm_password"],
});

export function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signUpSchema)
  });

  const navigate = useNavigate();

  function handleSignUp(data) {
    const { name, email, password } = data
    api.post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/home")
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível realizar o cadastro!");
        }
      })
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <h1>Save My Pressurizer</h1>

        <h2>Crie sua conta</h2>

        <Input
          placeholder='Nome'
          icon={FiUser}
          {...register("name")}
        />
        {errors.name && (
          <p style={{ color: 'red' }}>
            {errors.name.message}
          </p>
        )}

        <Input
          placeholder='E-mail'
          icon={FiMail}
          {...register("email")}
        />
        {errors.email && (
          <p style={{ color: 'red' }}>
            {errors.email.message}
          </p>
        )}

        <Input 
          placeholder='Senha'
          icon={FiLock}
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p style={{ color: 'red' }}>
            {errors.password.message}
          </p>
        )}  
        <Input
          placeholder='Confirmar a senha'
          icon={FiLock}
          type="password"
          {...register("confirm_password")}
        />
        {errors.confirm_password && (
          <p style={{ color: 'red' }}>
            {errors.confirm_password.message}
          </p>
        )}  

        <Button type="submit" title='Cadastrar' />

        <Footer>
          <p>Já tem uma conta?</p>
          <a href="/">Entrar</a>
        </Footer>
      </Form>
    </Container>
  )
}