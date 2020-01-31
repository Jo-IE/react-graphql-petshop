const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Order{
    _id: ID!
    user: ID!
    items: [Product]
    date: String!
    total: Float

}
type User{
    _id : ID!
    email: String!
    address: String!
}

type Product{
    _id : ID!
    title: String
    description: String
    image: String
    count: Int
    price: Float
    inStock: Int
}

input OrderInput{
  items: [ProductItem!]!
  date: String!
  total: Float

}
input ProductItem{
  title: String
    description: String
    image: String
    count: Int
    price: Float
}
input UserInput{
    email: String!
    address: String!

  }
type RootQuery {
orders: [Order!]!
products: [Product!]!

}
type RootMutation{
createOrder(userInput: UserInput, orderInput: OrderInput): String
createUser(userInput: UserInput) : String
}
schema{
    query: RootQuery
    mutation: RootMutation
}
`);
