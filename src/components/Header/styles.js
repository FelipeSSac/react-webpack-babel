import styled from 'styled-components';

export const Container = styled.header`
  background: ${props => props.theme.header.backgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 ${({theme}) => theme.spacing.large};
  border-radius: ${({theme}) => theme.borderRadius};
  justify-content: space-between;

  button {
    font-size: ${({theme}) => theme.spacing.medium};
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
