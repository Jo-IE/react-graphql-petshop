import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1.4rem;
  background: ${props => (props.cart ? 'var(--mainBlue)' : 'transparent')};
  border: 0.05rem solid var(--mainWhite);
  color: var(--mainWhite);
  border-radius: 0.1rem;
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${props =>
      props.cart ? 'var(--mainBlue)' : 'var(--mainWhite)'};
    color: ${props => (props.cart ? 'var(--mainWhite)' : 'var(--mainBlue)')};
  }
  &:focus {
    outline: none;
  }
`;
