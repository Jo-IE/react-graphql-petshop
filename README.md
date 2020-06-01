# Online Pet Shop Application

This is a full stack ecommerce pet shop application built in React (React router for routing, Context API for state management) and NodeJS using graphQL and MongoDB. Tests are written in Mocha/Chai on the backend and Jest and React Testing Library on the frontend.

To run the application:

Running this application requires a mongoDB connection string. Connection strings can be retrieved from the mongoDB [site]('https://www.mongodb.com/)

1. Create an account or login.
2. On the home screen, click on 'Build a cluster'.
3. Follow the steps to create a new cluster on the free tier.
4. After creating a new cluster, you will be taken to a Cluster overview screen. Click on Connect and a modal will open up showing connection options.
5. Follow the steps listed, making sure to save the username and password you select. On the next screen, select the option to get a connection string.
6. In the string, replace `<password>` with the password you selected. Save the string as `MONGO_URI` in a `.env` file in the root of the project.

After retrieving the MONGO connection string, you can run the application using the following steps:

1. Clone this repository (`git clone https://github.com/Jo-IE/react-graphql-petshop.git`).
2. Install dependencies (`npm i && cd client && npm i`)
3. Start the server and client `cd .. && npm run devstart`.

To Test:

1. `npm run server-test` and `npm run client-test`

## Functionality

A user can browse through products (`/products`), view more information about the product (`/product/:productid`), filter products by searching and add products to the shopping cart. The user can then check out and place the order. If the order is processed successfully, the user gets a confirmation message.

## Feature Extensions/ Additions

- Currently, the application does not support user authentication to save shopping cart information to the database. - Passport (graphql suggests express-jwt because of easier to integrate and simplicity) ffor backend, protected routes with react router for ffrontend but still want users that are not logged in to checkout and view products.

- A feature for canceling an order could also be added. - new mutation to API as well as resolver function.
- Protecting routes such as `/checkout` and `/confirmation` so that a user only sees them when they have placed a valid order. - redirect to empty cart if cart is empty. (get from state) in render method.
- Adding a payment method such as paypal, etc. paypal api docs or stripe etc.
- Using more extensive user input validation especially on the backend with a library such as express-validator.
- Adding more unit tests for the frontend to test each component because as it stands, the frontend tests are mostly for the error components.

express? recommended by graphql docs and easy to use
