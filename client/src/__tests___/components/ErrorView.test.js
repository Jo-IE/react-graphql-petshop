import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import ErrorView from '../../components/Error/ErrorView';
import { MemoryRouter } from 'react-router';

afterEach(cleanup);

const render404Error = () =>
  render(
    <MemoryRouter>
      <ErrorView />
    </MemoryRouter>
  );

const renderUncaughtError = () =>
  render(
    <MemoryRouter>
      <ErrorView error={'testError'} info={'test'} />
    </MemoryRouter>
  );
describe('Error page', () => {
  it('should contain unique error message on 404', () => {
    const { getByText } = render404Error();

    getByText('404');
    getByText(/page not found/i);
  });
  it('should contain unique error message on uncaught error', () => {
    const { getByText } = renderUncaughtError();

    getByText(/Something went wrong/i);
    getByText(/View error/i);
    getByText(/View stack trace/i);
  });
  it('should display stack trace', async () => {
    const { getByText } = renderUncaughtError();
    fireEvent.click(getByText(/View stack trace/i));
    await waitForElement(() => getByText(/test/i));
  });
  it('should display error', async () => {
    const { getByText } = renderUncaughtError();
    fireEvent.click(getByText(/View error/i));
    await waitForElement(() => getByText(/testError/i));
  });
});
