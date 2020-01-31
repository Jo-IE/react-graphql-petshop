import React, { Component } from 'react';
import Title from '../Title';

class Confirmation extends Component {
  componentDidMount() {
    this.props.value.resetState();
  }
  render() {
    return (
      <div className="container py-5">
        <Title name="Order" title="Confirmation" />
        <p className="mx-auto text-center font-weight-bold py-5">
          Thank you for your order. Your confirmation number is{' '}
          {this.props.value.orderNumber}
        </p>
      </div>
    );
  }
}

export default Confirmation;
