import React from 'react';

const CartItem = ({ item, value }) => {
  const { _id, title, image, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-3 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={image}
          className="img-fluid"
          alt="product"
          style={{ width: '5rem', height: '5rem' }}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>${price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => {
                decrement(_id);
              }}
              disabled={count === 1 ? true : false}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => {
                increment(_id);
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>
      {/* end of increment/decrement */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(_id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong className="d-lg-none">item total : </strong>
        <strong>${total}</strong>
      </div>
    </div>
  );
};

export default CartItem;
