import React, { Component } from 'react';
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        cart: [],
        modalOpen: false,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        modalProduct: {},
        filteredItems: [],
        user: { email: '', address: '' },
        inputErrors: [],
        orderNumber: '',
    };

    componentDidMount() {
        this.updateCart();
        window.addEventListener('beforeunload', this.updateStorage);
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.updateStorage);
    }
    getItem = (id, data) => {
        return data.products.find((item) => item._id === id);
    };

    addToCart = (id, data) => {
        const product = this.getItem(id, data);
        const tempCart = this.state.cart.slice();
        if (tempCart.indexOf(product) !== -1) {
            this.increment(id);
        } else {
            product.count = 1;
            const price = product.price;
            product.total = price;
            if (tempCart.length > 0) {
                this.setState(
                    () => {
                        return { cart: [...tempCart, product] };
                    },
                    () => {
                        this.addTotals();
                    }
                );
            } else {
                this.setState(
                    () => {
                        return { cart: [product] };
                    },
                    () => {
                        this.addTotals();
                    }
                );
                console.log(this.state.cart);
            }
        }
    };

    openModal = (id, data) => {
        const product = this.getItem(id, data);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true };
        });
    };

    closeModal = () => {
        this.setState(() => {
            return {
                modalOpen: false,
            };
        });
    };
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const product = tempCart.find((item) => item._id === id);
        product.count++;
        product.total += product.price;

        this.setState(() => {
            return {
                cart: [...tempCart],
            };
        }, this.addTotals());
    };

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const product = tempCart.find((item) => item._id === id);

        if (product.count > 1) {
            product.count--;
            product.total -= product.price;
        }

        this.setState(() => {
            return {
                cart: [...tempCart],
            };
        }, this.addTotals());
    };

    removeItem = (id) => {
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter((item) => item._id !== id);
        const product = this.state.cart.find((item) => item._id === id);
        product.count = 0;
        product.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
            };
        }, this.addTotals());
    };

    updateCart = () => {
        this.setState(() => {
            return {
                cart: JSON.parse(localStorage.getItem('cart')),
                cartSubTotal: localStorage.getItem('cartSubTotal'),
                cartTax: localStorage.getItem('cartTax'),
                cartTotal: localStorage.getItem('cartTotal'),
            };
        });
    };

    updateStorage = () => {
        let tempCart = [...this.state.cart];
        let cartSubTotal = this.state.cartSubTotal;
        let cartTax = this.state.cartTax;
        let cartTotal = this.state.cartTotal;
        localStorage.setItem('cart', JSON.stringify(tempCart));
        localStorage.setItem('cartSubTotal', cartSubTotal);

        localStorage.setItem('cartTax', cartTax);

        localStorage.setItem('cartTotal', cartTotal);
    };

    clearCart = () => {
        localStorage.setItem('cart', JSON.stringify([]));

        localStorage.setItem('cartSubTotal', 0);

        localStorage.setItem('cartTax', 0);

        localStorage.setItem('cartTotal', 0);
        this.setState(() => {
            return {
                cart: [],
                cartSubTotal: 0,
                cartTax: 0,
                cartTotal: 0,
            };
        });
    };
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map((item) => {
            return (subTotal += item.total);
        });
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;

        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total,
            };
        });
    };
    filterItems = (data, evt) => {
        const items = data.products.filter((item) => {
            return (
                item.title
                    .toLowerCase()
                    .search(evt.target.value.toLowerCase()) !== -1
            );
        });
        this.setState(() => {
            return {
                filteredItems: [...items],
            };
        });
    };

    updateEmail = (evt) => {
        const email = evt.target.value;
        this.setState((prevState) => {
            return {
                user: {
                    ...prevState.user,
                    email,
                },
            };
        });
    };
    validateInput = () => {
        const errors = [];
        this.setState((prevState) => {
            if (prevState.user.email.length === 0) {
                errors.push('Please enter an email address');
            }
            if (!/@{1}/.test(prevState.user.email)) {
                errors.push('please enter a valid email address');
            }
            if (prevState.user.address.length === 0) {
                errors.push('Please enter a shipping address');
            }

            return {
                inputErrors: errors,
            };
        });
        return errors.length === 0 ? true : false;
    };

    getOrderNumber = (data) => {
        let errors = [];
        if (data.data.createOrder == null) {
            errors.push(
                'There was an error creating your order. Please try again later.'
            );
        }
        this.setState(() => {
            return {
                orderNumber: data.data.createOrder,
                inputErrors: errors,
            };
        });
    };

    resetState = () => {
        this.clearCart();
        localStorage.clear();
        this.setState(() => {
            return {
                modalOpen: false,
                modalProduct: {},
                filteredItems: [],
                user: { email: '', address: '' },
                inputErrors: [],
            };
        });
    };

    updateAddress = (evt) => {
        const address = evt.target.value;
        this.setState((prevState) => {
            return {
                user: {
                    ...prevState.user,
                    address,
                },
            };
        });
    };

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                    filterItems: this.filterItems,
                    updateEmail: this.updateEmail,
                    updateAddress: this.updateAddress,
                    validateInput: this.validateInput,
                    getOrderNumber: this.getOrderNumber,
                    resetState: this.resetState,
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
