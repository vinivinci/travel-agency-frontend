import styled from 'styled-components';

export const FullScreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
`;

export const LoadingImage = styled.img`
  width: 150px; 
  height: auto;
`;

export const LoadingLabel = styled.div`
  margin-top: 20px; 
  font-size: 1.5rem;
  color: #333;
`;
