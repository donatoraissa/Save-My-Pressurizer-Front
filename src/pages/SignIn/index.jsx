import { useState } from 'react';

import { Container, Form, Footer } from './styles';

import { FiLock, FiMail } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";

const signInSchema = z.object({
  email: z.string().email("Insira um e-mail válido!"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres!"),
})

export function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signInSchema)
  });

  const { signIn } = useAuth();

  function handleSignIn(data) {
    const { email, password } = data;
    
    signIn({email, password})
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <h1>Save My Pressurizer</h1>

        <h2>Faça seu login</h2>

        <Input
          placeholder='E-mail'
          type="text"
          icon={FiMail}
          {...register("email")}
        />
        {errors.email && (
          <p>
            {errors.email.message}
          </p>
        )}
        <Input
          placeholder='Senha'
          type="password"
          icon={FiLock}
          {...register("password")}
        />
        {errors.password && (
          <p>
            {errors.password.message}
          </p>
        )}

        <Button title='Entrar' type='submit' />

        <Footer>
          <p>Não tem uma conta?</p>
          <a href="/register">Cadastre-se</a>
        </Footer>
      </Form>
    </Container>
  )
}