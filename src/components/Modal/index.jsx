import React, { useEffect, useState } from 'react';
import { ModalWrapper, ModalContent, CloseButton } from './styles';

import { ButtonIcon } from "../ButtonIcon";

import { FiX, FiTrash } from "react-icons/fi";
import { api } from '../../services/api';

import { formatDate } from "../../utils/formatDate";

export function Modal ({ isOpen, onClose, userId }) {
  const [clientData, setClientData] = useState(null);

  if (!isOpen) return null;

  useEffect(() => {
    async function fetchClient() {
      const response = await api.get(`/clientes/${userId}`);
      setClientData(response.data);
    }

    fetchClient();
  }, [userId])

  console.log(clientData)

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FiX size={30}></FiX>
        </CloseButton>
        <h1>Informações do Cliente</h1>
        {clientData && (
          <div>
            <p><strong>Nome:</strong> {clientData.cliente.first_name} {clientData.cliente.last_name}</p>  
            <p><strong>Telefone:</strong> {clientData.cliente.phone}</p>
            <p><strong>Endereço:</strong> {clientData.cliente.street}, {clientData.cliente.number} - {clientData.cliente.complement}</p>
            <p><strong>Data de instalação:</strong> {formatDate(clientData.cliente.installation_date)}</p>
            <p><strong>Status:</strong> Ligado</p>
          </div>
        )}

        <footer>
          <ButtonIcon icon={FiTrash}/>
        </footer>
        
      </ModalContent>
    </ModalWrapper>
  );
};
