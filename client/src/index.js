import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './context';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/react-hooks';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({ uri: 'http://localhost:5000/graphql' });
// or you can use `import gql from 'graphql-tag';` instead

/*client
  .query({
    query: gql`
      {
        products {
          title
          image
          price
        }
      }
    `
  })
  .then(result => console.log(result));*/

ReactDOM.render(
  <ApolloProvider client={client}>
    <ProductProvider>
      <Router>
        <App />
      </Router>
    </ProductProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
