import styled from 'styled-components';

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
  }
`;
