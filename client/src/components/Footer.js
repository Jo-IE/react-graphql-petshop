import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    return <FooterStyle className="navbar navbar-fixed-bottom"></FooterStyle>;
  }
}

const FooterStyle = styled.footer`
  background: var(--lightBlue) !important;
  color: black;
  height: 10vh;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
export default Footer;
