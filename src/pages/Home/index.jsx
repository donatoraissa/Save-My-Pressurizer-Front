import { Backgroung, Content, Questions } from "./styles";
import React, { useEffect, useState } from 'react';

import { Container } from "../AddUser/styles";
import { Navbar } from "../../components/Navbar";

export function Home() {
  const [mqttData, setmqttData] = useState(null);

  useEffect(() => {
    async function fetchMqtt() {
      const response = await api.get(`/pressurizers`);
      setmqttData(response)
    }

    fetchMqtt();
  }, [])
  return (
    <Container>
      <Navbar />
      <Content>
        <Backgroung />

        <Questions>
          <div>
            <h1>mqttData: {mqttData}</h1>
            <h1>QUEM SOMOS NÓS?</h1>
            <p>
              Somos um grupo de alunos do IFCE Fortaleza,
              dedicados ao desenvolvimento de soluções
              tecnológicas inovadoras. Durante a disciplina
              de Microcontroladores e Microprocessadores,
              criamos um sistema de gestão para proteção de
              pressurizadores.
            </p>
          </div>

          <div>
            <h1>O QUE FAZEMOS?</h1>
            <p>
              Nosso sistema de gestão para proteção de
              pressurizadores oferece uma solução inovadora
              e eficiente para o gerenciamento de sistemas
              hidráulicos, superando os desafios tradicionais
              enfrentados por operadores e técnicos.
            </p>

            <p>
              Para enfrentar esses desafios, desenvolvemos uma
              solução baseada em IoT que vai além dos sistemas
              convencionais de proteção. Nosso sistema monitora
              continuamente parâmetros críticos, como a presença
              de água e a temperatura do motor, garantindo a
              operação segura e eficiente dos pressurizadores.
              Com uma interface intuitiva e um dashboard web integrado,
              oferecemos aos usuários um controle completo e em tempo
              real, permitindo uma manutenção proativa e a prevenção
              de falhas antes que elas aconteçam.
            </p>
          </div>
        </Questions>
      </Content>
    </Container>
  )
}