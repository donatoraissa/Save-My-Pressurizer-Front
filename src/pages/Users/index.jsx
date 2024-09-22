import { Container, Content, CustomCustomTableContainer, CustomTableCell } from "./styles";
import React, { useState } from 'react';

import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import { Modal } from '../../components/Modal'

import { Table, TableBody, CustomTableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// Dados para a testar a tabela (Remover depois)
const data = [
    { id: 1, status: 'Ligado', name: 'XXXXXXXXXXXXX', installation: '01/01/2024', color: 'green' },
    { id: 2, status: 'Ligado', name: 'XXXXXXXXXXXXX', installation: '01/02/2024', color: 'green' },
    { id: 3, status: 'Desligado', name: 'XXXXXXXXXXXXX', installation: '01/03/2024', color: 'red' },
    { id: 4, status: 'Ligado', name: 'XXXXXXXXXXXXX', installation: '01/04/2024', color: 'green' },
    { id: 5, status: 'Bloqueado', name: 'XXXXXXXXXXXXX', installation: '01/05/2024', color: 'gray' },
    { id: 6, status: 'Ligado', name: 'XXXXXXXXXXXXX', installation: '01/06/2024', color: 'green' },
    { id: 7, status: 'Desligado', name: 'XXXXXXXXXXXXX', installation: '01/07/2024', color: 'red' },
    { id: 8, status: 'Ligado', name: 'XXXXXXXXXXXXX', installation: '01/08/2024', color: 'green' },
    { id: 9, status: 'Ligado', name: 'XXXXXXXXXXXXX', installation: '01/08/2024', color: 'green' },
  ];

export function Users() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMarkerClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Container>
            <Navbar />
            <Content>
                {/* Input de busca */}
                <Input placeholder="Busca" />

                {/* Tabela de usuários */}
                <CustomTableContainer>
                <Table>
                    <TableHead>
                    <TableRow>
                        <CustomTableCell>ID</CustomTableCell>
                        <CustomTableCell>Status</CustomTableCell>
                        <CustomTableCell>Name</CustomTableCell>
                        <CustomTableCell>Instalação</CustomTableCell>
                        <CustomTableCell>Ações</CustomTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id}>
                        <CustomTableCell>{item.id}</CustomTableCell>
                        <CustomTableCell>
                            <span style={{ 
                            backgroundColor: item.color, 
                            color: '#fff', 
                            padding: '5px 10px', 
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            width: '100px',  // Largura fixa
                            height: '30px',  // Altura fixa
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center'
                            }}>
                            {item.status}
                            </span>
                        </CustomTableCell>
                        <CustomTableCell>{item.name}</CustomTableCell>
                        <CustomTableCell>{item.installation}</CustomTableCell>
                        <CustomTableCell>
                            <Button
                                title="Ver Mais"
                                style={{ backgroundColor: '#1438B8',
                                    color: 'white',
                                    borderRadius: '5px',
                                    padding: '10px 20px',
                                    border: 'none',
                                    cursor: 'pointer' }}
                                onClick={handleMarkerClick}
                                >
                                Ver Mais
                            </Button>
                        </CustomTableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </CustomTableContainer>

                {isModalOpen && 
                    <Modal 
                        isOpen={isModalOpen}
                        onClose={closeModal}
                    />}

            </Content>
        </Container>
    );
}
  