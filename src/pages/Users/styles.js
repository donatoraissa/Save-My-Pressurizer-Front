import { styled } from "styled-components";

import { TableCell as MuiTableCell } from '@mui/material';
import { TableContainer, Paper } from '@mui/material';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "navbar"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 150px 80px;;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 105px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px; 
  background: none;
  box-sizing: border-box;
`;

const CustomTableContainer = styled(TableContainer)`
  background-color: #F4EDE8;
  font-family: 'Roboto Slab', sans-serif;
  border: 2px solid #1438B8;
  border-radius: 10px;
`;

export const CustomTableCell = styled(MuiTableCell)`
  border: 1px solid #e0e0e0;
  text-align: center;
  vertical-align: middle;
  padding: 10px;
`;