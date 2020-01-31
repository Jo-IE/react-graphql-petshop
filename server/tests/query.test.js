const chai = require('chai');

const chaiHttp = require('chai-http');
const server = require('../../index');
const should = chai.should();

chai.use(chaiHttp);

describe('GraphQL', () => {
  it('Returns all orders', done => {
    chai
      .request(server)
      .post('/graphql')
      .send({
        query:
          '{ orders { _id user items {title description image count price} date total}}'
      })
      .then(res => {
        res.body.data.orders[0].should.have.property('_id');
        res.body.data.orders[0].should.have.property('user');
        res.body.data.orders[0].should.have.property('items');
        res.body.data.orders[0].should.have.property('date');
        res.body.data.orders[0].should.have.property('total');
        done();
      })
      .catch(done);
  });

  it('Returns all products', done => {
    chai
      .request(server)
      .post('/graphql')
      .send({
        query:
          '{ products {   _id title description image count price inStock} }'
      })
      .then(res => {
        res.body.data.products.should.be.an('array');
        res.body.data.products[0].should.have.property('_id');
        res.body.data.products[0].should.have.property('description');
        res.body.data.products[0].should.have.property('image');
        res.body.data.products[0].should.have.property('count');

        res.body.data.products[0].should.have.property('price');

        done();
      })
      .catch(done);
  });
});
