import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import '@testing-library/jest-dom';
import { InitialEntry } from '@remix-run/router';

const renderComponent = async (route: InitialEntry) => {
  await act(async () => {
    render(
      <Router initialEntries={[route]}>
        <AppRoutes />
      </Router>
    );
  });
};

const mockComponent = (content: React.ReactNode) => ({
  __esModule: true,
  default: () => content,
});

const mockPage = (pagePath: string, content: React.ReactNode) => {
  jest.mock(pagePath, () => mockComponent(content));
};

mockPage(
  '../pages/custom.library/custom.library.page',
  <div data-testid="mocked-custom-library">Mocked Custom Library Component</div>
);

mockPage(
  '../pages/character.page/character.page',
  <p data-testid="mocked-home">Mocked Home Component</p>
);

mockPage(
  '../pages/error.page/error.page',
  <span data-testid="mocked-error-page">Mocked Error Page Component</span>
);

mockPage(
  '../pages/form.page/form.tsx',
  <span data-testid="mocked-form">Mocked Form Component</span>
);

mockPage(
  '../pages/details.page/details.page',
  <h1 data-testid="mocked-details-page">Mocked Details Page Component</h1>
);

describe('When we render', () => {
  test('the component should render Custom Library', async () => {
    await renderComponent('/custom-library');
    const element = screen.getByTestId('mocked-custom-library');
    expect(element).toBeInTheDocument();
  });

  test('the component should render Home', async () => {
    await renderComponent('/home');
    const element = screen.getByTestId('mocked-home');
    expect(element).toBeInTheDocument();
  });

  test('the component should render Error Page', async () => {
    await renderComponent('/*');
    const element = screen.getByTestId('mocked-error-page');
    expect(element).toBeInTheDocument();
  });

  test('the component should render Details Page', async () => {
    await renderComponent('/details/:id/');
    const element = screen.getByTestId('mocked-details-page');
    expect(element).toBeInTheDocument();
  });

  test('the component should render Form', async () => {
    await renderComponent('/form');
    const element = screen.getByTestId('mocked-form');
    expect(element).toBeInTheDocument();
  });
});
