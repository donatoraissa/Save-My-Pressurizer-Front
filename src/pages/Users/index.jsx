import { Container, Content, CustomTableContainer, CustomTableCell } from "./styles";
import React, { useEffect, useState } from 'react';

import { Navbar } from "../../components/Navbar";
import { Modal } from '../../components/Modal'

import { Table, TableBody, TableHead, TableRow, Button } from '@mui/material';

import { api } from "../../services/api";

import { formatDate } from "../../utils/formatDate";
import { getStatusColor } from "../../utils/getStatusColor";

export function Users() {
    const [clients, setClients] = useState([]);
    const [clientId, setUserId] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMarkerClick = (id) => {
        setUserId(id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        async function fetchClients() {
            const response = await api.get('/clientes');
            setClients(response.data);
        }

        fetchClients();
    }, [])


    return (
        <Container>
            <Navbar />
            <Content>
                <CustomTableContainer>
                <Table>
                    <TableHead>
                    <TableRow>
                        <CustomTableCell>ID</CustomTableCell>
                        <CustomTableCell>Status</CustomTableCell>
                        <CustomTableCell>Nome</CustomTableCell>
                        <CustomTableCell>Data de Instalação</CustomTableCell>
                        <CustomTableCell>Ações</CustomTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {clients.map((item) => (
                        <TableRow key={item.id}>
                            <CustomTableCell>{item.id}</CustomTableCell>
                            <CustomTableCell>
                                <span style={{ 
                                backgroundColor: getStatusColor('ligado'), 
                                color: '#fff', 
                                padding: '5px 10px', 
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                width: '100px',
                                height: '30px',
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center'
                                }}>
                                Ligado
                                </span>
                            </CustomTableCell>
                            <CustomTableCell>{`${item.first_name} ${item.last_name}`}</CustomTableCell>
                            <CustomTableCell>{formatDate(item.installation_date)}</CustomTableCell>
                            <CustomTableCell>
                                <Button
                                    title="Ver Mais"
                                    style={{ backgroundColor: '#1438B8',
                                        color: 'white',
                                        borderRadius: '5px',
                                        padding: '10px 20px',
                                        border: 'none',
                                        cursor: 'pointer' }}
                                    onClick={() => handleMarkerClick(item.id)}
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
                        clientId={clientId}
                    />}

            </Content>
        </Container>
    );
}
  