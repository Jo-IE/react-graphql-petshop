import React from 'react';
import { Link } from 'react-router-dom';
import { MainButton } from '../Buttons/MainButton';

const CartTotals = ({ value, history }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  console.log(history);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                onClick={() => {
                  clearCart();
                }}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            {history.location.pathname === '/cart' ? (
              <Link to="/checkout">
                <MainButton>checkout</MainButton>
              </Link>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartTotals;
