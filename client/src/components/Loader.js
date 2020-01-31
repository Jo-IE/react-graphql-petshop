import React, { Component } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/core';

class Loader extends Component {
  render() {
    return (
      <ClipLoader
        css={override}
        sizeUnit={'px'}
        color={'var(--mainBlue)'}
        size={100}
      />
    );
  }
}

const override = css`
  display: block;
  left: 50%;
  position: relative;
  margin-top: 20%;
`;

export default Loader;
