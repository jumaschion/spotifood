import styled from 'styled-components';

export const Text = styled.p`
  color: white;
  font-weight: bold;
  font-size: 33px;
  cursor: pointer;
  font-family: 'Aleo', serif;
  span {
    color: #ff7d0d;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  height: calc(100vh - 90px);
  align-items: center;
  justify-content: space-evenly;
`;