import React from 'react';
import Product from './Product';
import Title from './Title';
import { useQuery } from '@apollo/react-hooks';
import { GET_DISPLAY_PRODUCTS } from '../graphql/queries/products';
import { ProductConsumer } from '../context';
import Loader from './Loader';

const ProductList = ({ match }) => {
  const { loading, error, data } = useQuery(GET_DISPLAY_PRODUCTS);
  if (loading) return <Loader />;
  if (error) throw new Error('graphql error loading data');

  return (
    <ProductConsumer>
      {value => (
        <div className="py-5">
          <div className="container">
            <form className="form-inline md-form form-sm mt-0">
              <i className="fas fa-search" aria-hidden="true"></i>
              <input
                type="text"
                placeholder="Search Animals"
                onChange={e => value.filterItems(data, e)}
                className="form-control form-control-sm ml-3 "
                aria-label="Search"
              />
            </form>
            <Title name="our" title="animals" />

            <div className="row">
              {value.filteredItems.length === 0
                ? data.products.map(product => {
                    return (
                      <Product
                        key={product._id}
                        product={product}
                        match={match}
                      ></Product>
                    );
                  })
                : value.filteredItems.map(product => {
                    return (
                      <Product
                        key={product._id}
                        product={product}
                        match={match}
                      ></Product>
                    );
                  })}
            </div>
          </div>
        </div>
      )}
    </ProductConsumer>
    //
  );
};

export default ProductList;
