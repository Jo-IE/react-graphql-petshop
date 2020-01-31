# Online Pet Shop Application

This is a full stack ecommerce pet shop application built in React (React router for routing, Context API for state management) and NodeJS using graphQL and MongoDB. Tests are written in Mocha/Chai on the backend and Jest and React Testing Library on the frontend.

To run the application:

1. Clone this repository (`git clone`).
2. Install dependencies (`npm i && cd client && npm i`)
3. Start the server and client `cd .. && npm run devstart`.

To Test:

1. `npm run server-test` and `npm run client-test`

## Functionality

A user can browse through products (`/products`), view more information about the product (`/product/:productid`), filter products by searching and add products to the shopping cart. The user can then check out and place the order. If the order is processed successfully, the user gets a confirmation message.

## Feature Extensions/ Additions

- Currently, the application does not support user authentication to save shopping cart information to the database.
- A feature for canceling an order could also be added.
- Protecting routes such as `/checkout` and `/confirmation` so that a user only sees them when they have placed a valid order.
- Adding a payment method such as paypal, ect.
- Using more extensive user input validation especially on the backend with a library such as express-validator.
- Adding more unit tests for the frontend to test each component because as it stands, the tests are mostly for the error components.
