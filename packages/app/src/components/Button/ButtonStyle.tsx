import styled from 'styled-components';

export const ButtonStyle = styled.button`

  display: flex;
  margin: ${props => props.margin};
  background: #ff7567;
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  padding: ${props => props.padding};
  width: ${props => props.width};
  cursor: pointer;
  z-index: 1;
  position: relative;
  font-size: ${props => props.size};
  font-family: inherit;
  color: white;
  outline: none;
  border: none;
  overflow: hidden;
  text-transform: uppercase;

`;

export const Text = styled.p`
  color: #ffffff;
  margin: 0 auto;
  font-weight: bold;
`;