import { Container, ContentForm, InputWrapper } from "./styles";
import InputMask from 'react-input-mask';


import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";

import { FiCalendar, FiMail, FiMap, FiMapPin, FiPhone, FiTrash, FiUser } from "react-icons/fi";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";

import cep from "cep-promise";
import { useEffect } from "react";

const addUserSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório!"),
  cep: z.string().refine((val) => val.replace(/\D/g, '').length === 8, {
    message: "O CEP precisa ter 8 dígitos!"
  }),
  lastName: z.string().min(1, "O sobrenome é obrigatório!"),
  street: z.string().min(1, "A rua é obrigatória!"),
  cpf: z.string().refine((val) => val.replace(/\D/g, '').length === 11, {
    message: "O CPF precisa ter 11 dígitos!"
  }),
  addressNumber: z.string().min(1, "O número da residência é obrigatório!"),
  email: z.string().email("Insira um e-mail válido!"),
  phoneNumber: z.string().refine((val) => val.replace(/\D/g, '').length === 11, {
    message: "O número de telefone precisa ter 11 dígitos!"
  }),
  complement: z.string().min(1, "O complemento é obrigatório!"),
  installationDate: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: "Insira uma data válida!"
  }),
});



export function AddUser() {
  const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(addUserSchema)
  });

  const navigate = useNavigate();

  const postalCode = watch('cep');

  async function getAddress() {
    
    const cleanPostalCode = postalCode.replace(/\D/g, '');
  
    if (cleanPostalCode && cleanPostalCode.length === 8) {
      try {
        const response = await cep(cleanPostalCode);
        setValue('street', response.street);
        console.log(response.street);
      } catch (error) {
        alert('Erro ao buscar o CEP');
      }
    }
  }
  
  

  useEffect(() => {
    getAddress();
  }, [postalCode]);

  async function handleAddNewClient(data) {
    const {
      name,
      cep,
      lastName,
      street,
      cpf,
      addressNumber,
      email,
      complement,
      phoneNumber,
      installationDate
    } = data;

    await api.post("/clientes", {
      first_name: name,
      last_name: lastName,
      cpf: cpf,
      email: email.toString(),
      phone: phoneNumber,
      postal_code: cep,
      street: street,
      number: Number(addressNumber),
      complement: complement,
      installation_date: Date(installationDate)
    }).then(() => {
      alert("Cliente cadastrado com sucesso!");
      navigate("/");
    }).catch((error) => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível realizar o cadastro!");
      }
    })   
  }

  return (
    <Container>
      <Navbar />
      <main>
        <ContentForm onSubmit={handleSubmit(handleAddNewClient)}>
          <InputWrapper>
            <Input
              placeholder='Nome'
              icon={FiUser}
              height="80px"
              {...register("name")}
            />
            {errors.name && (
              <p>
                {errors.name.message}
              </p>
            )}
          </InputWrapper>
          <InputWrapper>
          <InputMask
            mask="99999-999"
            placeholder='CEP'
            icon={FiMap}
            height="80px"
            {...register("cep")}
          >
            {(inputProps) => <Input {...inputProps} />}
          </InputMask>
            {errors.cep && <p>{errors.cep.message}</p>}
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder='Sobrenome'
              icon={FiUser}
              height="80px"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p>
                {errors.lastName.message}
              </p>
            )}
          </InputWrapper>
          <InputWrapper>
          <Input
              placeholder='Rua'
              icon={FiMapPin}
              height="80px"
              {...register("street")}
            />
            {errors.street && (
              <p>
                {errors.street.message}
              </p>
            )}
          </InputWrapper>
          <InputWrapper>
            <InputMask
              mask="999.999.999-99"
              placeholder='CPF'
              icon={FiUser}
              height="80px"
              {...register("cpf")}
            >
              {(inputProps) => <Input {...inputProps} />}
           </InputMask>
           {errors.cpf && <p>{errors.cpf.message}</p>}
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder='Número'
              type="number"
              icon={FiMapPin}
              height="80px"
              {...register("addressNumber")}
            />
            {errors.addressNumber && (
              <p>
                {errors.addressNumber.message}
              </p>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder='E-mail'
              icon={FiMail}
              type='email'
              height="80px"
              {...register("email")}
            />
            {errors.email && (
              <p>
                {errors.email.message}
              </p>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder='Complemento'
              icon={FiMapPin}
              height="80px"
              {...register("complement")}
            />
            {errors.complement && (
              <p>
                {errors.complement.message}
              </p>
            )}
          </InputWrapper>
          <InputWrapper>
          <InputMask
            mask="(99) 99999-9999"
            placeholder='Telefone'
            icon={FiPhone}
            height="80px"
            {...register("phoneNumber")}
          >
            {(inputProps) => <Input {...inputProps} />}
          </InputMask>
          {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder='Data de instalação'
              icon={FiCalendar}
              type='date'
              height="80px"
              {...register("installationDate")}
            />
            {errors.installationDate && (
              <p>
                {errors.installationDate.message}
              </p>
            )}
          </InputWrapper>
          <footer>
            <Button
              title='Salvar'
              type="submit"  
            />
            <ButtonIcon icon={FiTrash}/>
          </footer>
        </ContentForm>
      </main>
    </Container>
  )
}