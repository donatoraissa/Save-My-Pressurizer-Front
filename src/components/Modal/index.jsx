import React from 'react';
import { ModalWrapper, ModalContent, CloseButton } from './styles';

import { Input } from '../Input';
import { Button } from "..//Button";
import { ButtonIcon } from "../ButtonIcon";

import { FiX, FiTrash } from "react-icons/fi";

export function Modal ({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FiX size={30}></FiX>
        </CloseButton>
        <h1>Informações do Cliente</h1>
        <div>
          <p>Nome</p>
          <Input />
        </div>
        <div>
          <p>Telefone</p>
          <Input />
        </div>
        <div>
          <p>Endereço</p>
          <Input />
        </div>
        <div>
          <p>Data de instação</p>
          <Input />
        </div>
        <div>
          <p>Status</p>
          <Input />
        </div>

        <footer>
          <Button title='Editar' />
          <ButtonIcon icon={FiTrash}/>
        </footer>
        
      </ModalContent>
    </ModalWrapper>
  );
};
