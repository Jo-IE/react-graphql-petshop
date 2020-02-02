import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Buttons/Button';
import Title from './Title';
const NavBar = () => {
  return (
    <NavStyle className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Title name="p" title="s" />
      </Link>

      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/products" className="nav-link">
            Animals
          </Link>
        </li>
      </ul>

      <Link to="/cart" className="ml-auto">
        <Button>
          <span className="mr-2">
            <i className="fas fa-cart-plus">My Cart</i>
          </span>
        </Button>
      </Link>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  background: var(--mainBlue) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default NavBar;
