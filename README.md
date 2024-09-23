# Save My Pressurizer - Frontend

Este projeto faz parte do trabalho de conclusão de curso (TCC) "Save My Pressurizer", desenvolvido com foco em monitoramento e controle de pressurizadores, reduzindo prejuízos. O frontend da aplicação foi desenvolvido utilizando diversas tecnologias modernas para garantir uma interface eficiente e amigável ao usuário.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção de interfaces de usuário.
- **Vite**: Ferramenta para otimização e criação de projetos frontend com foco em performance.
- **Styled-Components**: Para estilização de componentes de maneira dinâmica e modular.
- **Zod**: Para validação de dados de entrada e regras de negócio.
- **React-Icons**: Biblioteca de ícones para React, utilizada para melhorar a visualização da interface.
- **@mui/material**: Utilizada para a criação de tabelas e elementos de UI.
- **React Modal**: Para exibir modais e janelas de diálogo.
- **React Leaflet**: Para exibir mapas interativos dentro da aplicação.
- **React Geocode**: Para conversão de coordenadas geográficas em endereços, auxiliando na localização dos pressurizadores.
- **React Hooks**: Utilizados para gerenciamento de estado e ciclo de vida dos componentes.
- **Axios**: Para conexão com o backend e realização de requisições HTTP.

## Funcionalidades

- Exibição de um mapa interativo que mostra a localização dos pressurizadores instalados.
- Tabelas para exibição e gerenciamento dos dados dos dispositivos.
- Modais para exibição e exclusão de informações.
- Validação de formulários com Zod para garantir a consistência dos dados.

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/save-my-pressurizer.git

2. Acesse o diretório do projeto:
   ```bash
   cd save-my-pressurizer

3. Instale as dependências:
   ```bash
   npm install

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev

Após isso, no terminal, aparecerá onde o aplicativo será iniciado.

Dependendo da porta queo back estiver rodando, você deve mudar a baseUrl no arquivo api.js.

## Estrutura de Pastas

```bash
src/
│
├── assets/        # Arquivos estáticos (imagens)
├── components/    # Componentes reutilizáveis
├── hooks/         # Custom hooks
├── pages/         # Páginas da aplicação
├── routes/        # Definições de rotas
├── services/      # Conexão com o backend e APIs
├── styles/        # Estilos globais e customizados
└── utils/         # Funções utilitárias
└── main.jsx        # Componente principal da aplicação
