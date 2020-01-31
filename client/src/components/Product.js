import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

class Product extends Component {
  render() {
    const { _id, title, image, price } = this.props.product;
    const { match } = this.props;
    return (
      <ProductConsumer>
        {value => (
          <ProductStyle className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card ">
              <div className=" p-2">
                <Link to={`${match.path}/${_id}`}>
                  <img src={image} alt={title} className="card-img-top" />
                </Link>
              </div>
            </div>

            <div className="my-3">
              <p>{title}</p>
              <p>
                <span className="mr-1">$</span>
                <strong>{price}</strong>
              </p>
            </div>
          </ProductStyle>
        )}
      </ProductConsumer>
    );
  }
}

const ProductStyle = styled.div`
  .card {
    ;

  }
  &:hover {
      .card{
        cursor: pointer;
      }

    }
  }

`;
export default Product;
