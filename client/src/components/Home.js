import React, { Component } from 'react';
import { MainButton } from './Buttons/MainButton';
import { Link } from 'react-router-dom';
import Title from './Title';
class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <section className="hero py-2 mb-5">
          <div className="card mx-auto text-center my-5 p-5 shadow-lg p-3 mb-5 bg-white rounded">
            <Title name="pet" title="shop" />
            <Link to="/products">
              <MainButton className="my-5">shop now</MainButton>
            </Link>
          </div>
        </section>

        <section className="row">
          <div className="col-md-6 mx-auto col-lg-3  ">
            <img
              src="https://images.unsplash.com/photo-1573761691575-2c10f2554119?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              alt="black puppy"
              className="card-img-top"
            />{' '}
          </div>
          <div className="col-6 mx-auto col-lg-3  ">
            <img
              src="https://images.unsplash.com/photo-1524698604136-5a02fb1f7ec9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              alt="white dog"
              className="card-img-top"
            />
          </div>
        </section>
        <section></section>
      </div>
    );
  }
}

export default Home;
