import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { MainButton } from './Buttons/MainButton';
import { Link, withRouter } from 'react-router-dom';

const Modal = props => {
  return (
    <ProductConsumer>
      {value => {
        const { modalOpen, closeModal } = value;
        const { image, title, price } = value.modalProduct;

        if (!modalOpen) {
          return null;
        } else {
          return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                  >
                    <Link to={props.location.pathname}>
                      <i
                        className="text-blue text-left mb-5 fas fa-window-close"
                        onClick={() => closeModal()}
                      ></i>
                    </Link>
                    <h5>item added to cart!</h5>
                    <img src={image} alt="product" className="img-fluid" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price : $ {price}</h5>
                    {/*buttons*/}

                    <Link to="/cart">
                      <MainButton cart onClick={() => closeModal()}>
                        view cart
                      </MainButton>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }
      }}
    </ProductConsumer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;

export default withRouter(Modal);
