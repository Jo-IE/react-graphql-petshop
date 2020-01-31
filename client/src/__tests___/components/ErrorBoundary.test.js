import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from '../../components/Error/ErrorBoundary';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
  jest.clearAllMocks();
});

function MockError({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('fake error');
  } else {
    return null;
  }
}

const NoErrorView = () => <h1>No Error here!</h1>;

test('renders error messages', () => {
  const { rerender, getByText } = render(
    <MemoryRouter>
      <ErrorBoundary>
        <MockError />
      </ErrorBoundary>
    </MemoryRouter>
  );

  rerender(
    <MemoryRouter>
      <ErrorBoundary>
        <MockError shouldThrow={true} />
      </ErrorBoundary>
    </MemoryRouter>
  );

  const error = expect.any(Error);
  const info = { componentStack: expect.stringContaining('MockError') };

  getByText(/Something went wrong/i);
  getByText('Error: fake error');
  getByText(/View error/i);
  getByText(/View stack trace/i);
});

test('render component if there is no error', () => {
  const { getByText } = render(
    <MemoryRouter>
      <ErrorBoundary>
        <NoErrorView />
      </ErrorBoundary>
    </MemoryRouter>
  );

  getByText('No Error here!');
});

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});
