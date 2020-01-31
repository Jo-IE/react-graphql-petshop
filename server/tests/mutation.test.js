const chai = require('chai');

const mongoose = require('mongoose');
const User = require('../models/user');

const chaiHttp = require('chai-http');
const server = require('../../index');
const should = chai.should();

chai.use(chaiHttp);

describe('GraphQL', () => {
  beforeEach('delete all users', () => {
    User.deleteMany({})
      .then(res => console.log(res))
      .catch(err => console.log(err));
  });

  it('creates a new order', done => {
    chai
      .request(server)
      .post('/graphql')
      .send({
        query: `mutation { createOrder(userInput: { email: "lala.com", address: "hooli"}, orderInput: {items:
{title: "a dog" description: "a dog" image: "url" count: 2 price: 50}, date: "2011-10-05T14:48:00.000Z", total: 100 }) }`
      })
      .then(res => {
        res.body.data.should.have.property('createOrder');
        res.body.data.createOrder.should.be.a('string');

        done();
      })
      .catch(done);
  });

  it('creates a new user', done => {
    chai
      .request(server)
      .post('/graphql')
      .send({
        query:
          'mutation { createUser(userInput: { email: "email3@email.com", address: "hooli ave"})  }'
      })
      .then(res => {
        res.body.data.should.have.property('createUser');
        res.body.data.createUser.should.be.a('string');

        done();
      })
      .catch(done);
  });
});
