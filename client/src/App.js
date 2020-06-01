import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Productlist from './components/Productlist';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import ErrorView from './components/Error/ErrorView';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Home from './components/Home';
import ErrorBoundary from './components/Error/ErrorBoundary';
import Checkout from './components/Cart/Checkout';
import ConfirmationPage from './components/Cart/ConfirmationPage';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <ErrorBoundary>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route
                            path='/products/:productId'
                            component={Details}
                        />
                        <Route path='/products' component={Productlist} />
                        <Route path='/cart' component={Cart} />
                        <Route path='/checkout' component={Checkout} />
                        <Route
                            path='/confirmation'
                            component={ConfirmationPage}
                        />
                        <Route path='/error' component={ErrorView}></Route>
                        <Redirect to='/error' />
                    </Switch>
                    <Modal />
                </ErrorBoundary>
                <Footer />
            </div>
        );
    }
}

export default App;
