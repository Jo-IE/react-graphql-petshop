import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { MainButton } from './Buttons/MainButton';
import { useQuery } from '@apollo/react-hooks';
import { GET_DETAIL_PRODUCTS } from '../graphql/queries/products';
import Loader from './Loader';

const Details = ({ match }) => {
  const { loading, error, data } = useQuery(GET_DETAIL_PRODUCTS);
  if (loading) return <Loader />;
  if (error) throw new Error('graphql error loading data');

  const detail = data.products.find(
    ({ _id }) => _id === match.params.productId
  );

  return (
    <ProductConsumer>
      {value => {
        const { _id, title, description, image, price } = detail;
        return (
          <div className="container py-5">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-orange my-5">
                <h1>{title}</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={image} alt="product" className="img-fluid" />
              </div>

              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h4 className="text-orange">
                  <strong>
                    price: <span>${price}</span>
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  product info:
                </p>
                <p className="text-muted lead">{description}</p>

                <div>
                  <Link to="/products">
                    <MainButton>back to products</MainButton>
                  </Link>
                  <MainButton
                    onClick={() => {
                      value.addToCart(_id, data);
                      value.openModal(_id, data);
                    }}
                  >
                    {' '}
                    add to cart
                  </MainButton>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;
