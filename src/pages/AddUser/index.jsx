import { Container, Content } from "./styles";

import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";

import { FiCalendar, FiMail, FiMap, FiMapPin, FiPhone, FiTrash, FiUser } from "react-icons/fi";

export function AddUser() {
  return (
    <Container>
      <Navbar />
      <main>
        <Content>
          <Input placeholder='Nome' icon={FiUser} height="80px"/>
          <Input placeholder='CEP' icon={FiMap} type='number' height="80px"/>
          <Input placeholder='Sobrenome' icon={FiUser} height="80px"/>
          <Input placeholder='Rua' icon={FiMapPin} height="80px"/>
          <Input placeholder='CPF' icon={FiUser} type='number' height="80px"/>
          <Input placeholder='Número' icon={FiMapPin} type='number' height="80px"/>
          <Input placeholder='E-mail' icon={FiMail} type='email' height="80px"/>
          <Input placeholder='Complemento' icon={FiMapPin} height="80px"/>
          <Input placeholder='Telefone' icon={FiPhone} type='number' height="80px"/>
          <Input placeholder='Data de instalação' icon={FiCalendar} type='date' height="80px"/>
        
          <footer>
            <Button title='Salvar' />
            <ButtonIcon icon={FiTrash}/>
          </footer>
        </Content>
      </main>
    </Container>
  )
}