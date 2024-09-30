import styled from 'styled-components';

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
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;

  .leaflet-container {
    height: 100%;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    position: fixed;
  }
`;
