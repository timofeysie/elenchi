import { render } from '@testing-library/react';

import Cards from './cards';

describe('Cards', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cards />);
    expect(baseElement).toBeTruthy();
  });
});
