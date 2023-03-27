import { render } from '@testing-library/react';
import Page from 'pages/index.page';

describe('Index', () => {
  it('should render correctly', () => {
    render(<Page />);
  });
});
