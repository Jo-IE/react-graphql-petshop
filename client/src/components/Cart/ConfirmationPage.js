import React, { Component } from 'react';
import Confirmation from './Confirmation';
import { ProductConsumer } from '../../context';
class ConfirmationPage extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => <Confirmation value={value} />}
      </ProductConsumer>
    );
  }
}

export default ConfirmationPage;
