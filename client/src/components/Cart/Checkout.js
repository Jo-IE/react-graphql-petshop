import React from 'react';
import CartTotals from './CartTotals';
import Title from '../Title';
import { MainButton } from '../Buttons/MainButton';
import { ProductConsumer } from '../../context';
import { CREATE_ORDER } from '../../graphql/mutations/order';
import { useMutation } from '@apollo/react-hooks';

const Checkout = props => {
  const [createOrder, { data }] = useMutation(CREATE_ORDER);

  return (
    <ProductConsumer>
      {value => (
        <div className="container py-5">
          <Title title="checkout" />
          <h2 className="mx-auto text-capitalize py-5">
            please enter your information below
          </h2>
          <form action="">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={value.updateEmail}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Shipping Address"
                onChange={value.updateAddress}
              />
            </div>
            <p>
              {value.inputErrors.map(error => {
                return <li key={error}>{error}</li>;
              })}
            </p>

            <CartTotals value={value} history={props.history} />

            <MainButton
              onClick={e => {
                e.preventDefault();
                value.validateInput() &&
                  createOrder({
                    variables: {
                      userInput: {
                        email: value.user.email,
                        address: value.user.address
                      },
                      orderInput: {
                        items: value.cart.map(item => {
                          return {
                            title: item.title,
                            description: item.description,
                            image: item.image,
                            count: item.count,
                            price: item.price
                          };
                        }),
                        date: new Date().toISOString(),
                        total: value.cartTotal
                      }
                    }
                  }).then(res => {
                    value.getOrderNumber(res);
                    props.history.push('/confirmation');
                  });
              }}
              disabled={value.cart.length == 0 ? true : false}
            >
              {' '}
              Place Order
            </MainButton>
          </form>
        </div>
      )}
    </ProductConsumer>
  );
};

export default Checkout;
