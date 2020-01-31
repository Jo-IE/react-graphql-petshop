const Order = require('../../models/order');
const Product = require('../../models/product');
const User = require('../../models/user');

module.exports = {
  orders: () => {
    return Order.find()
      .then(orders => {
        return orders.map(order => {
          return { ...order._doc, _id: order.id };
        });
      })
      .catch(err => console.log(err));
  },
  products: () => {
    return Product.find()
      .then(products => {
        return products.map(product => {
          return { ...product._doc, _id: product.id };
        });
      })
      .catch(err => console.log(err));
  },
  createOrder: args => {
    let { email, address } = args.userInput;
    let { items, date, total } = args.orderInput;
    email = email.trim();
    address = address.trim().replace('#<script(.*?)>(.*?)</script>#is', '');
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValidEmail = emailRegex.test(String(email).toLowerCase());
    if (!isValidEmail) throw new Error('email is not in proper format');

    return User.findOne({ email })
      .then(res => {
        if (res != null) {
          const order = new Order({
            user: res._id,
            items,
            date: new Date(date),
            total
          });

          return order
            .save()
            .then(result => {
              return result._id.toString();
            })
            .catch(err => console.log(err));
        } else {
          const user = new User({
            email,
            address
          });

          user
            .save()
            .then(result => {
              const order = new Order({
                user: result._id,
                items,
                date: new Date(date),
                total
              });
              return order
                .save()
                .then(result => {
                  return result._id.toString(); //{ ...result._doc, _id: order.id };
                })
                .catch(err => console.log(err));

              //console.log(result);
              //return { ...result._doc, _id: user.id };
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  },
  createUser: args => {
    const userEmail = args.userInput.email;

    User.findOne({ email: userEmail })
      .then(res => {
        if (res == null) {
          const user = new User({
            email: userEmail,
            address: args.userInput.address
          });

          return user
            .save()
            .then(result => {
              return result._id.toString();
            })
            .catch(err => console.log(err));
        }
        return res._id.toString();
      })
      .catch(err => console.log(err));
  }
};
