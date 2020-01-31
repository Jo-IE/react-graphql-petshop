import React from 'react';
import App from '../../App';
import { MemoryRouter } from 'react-router';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { ProductProvider } from '../../context';
import { ApolloProvider } from '@apollo/react-hooks';
import '@testing-library/jest-dom/extend-expect';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({ uri: 'http://localhost:5000/graphql' });
afterEach(() => {
  jest.clearAllMocks();
});

describe('App.js', () => {
  const renderMain = () =>
    render(
      <ApolloProvider client={client}>
        <ProductProvider>
          <MemoryRouter>
            <App dispatch={jest.fn()} />
          </MemoryRouter>
        </ProductProvider>
      </ApolloProvider>
    );

  describe('App', () => {
    test('renders without crashing', async () => {
      const { getByText } = renderMain();

      getByText(/animals/i);
      getByText(/shop now/i);
      getByText(/pet/i);
    });
  });
});
