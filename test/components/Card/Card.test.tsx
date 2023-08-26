import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from '../../../src/components/Card/Card';

describe('Card', () => {
  test('renders card component with correct props', () => {
    const accountType = 'CC';
    const nro = '1234567890';

    const { getByText } = render(
      <BrowserRouter>
        <Card accountType={accountType} nro={nro} />
      </BrowserRouter>
    );

    expect(getByText('Cuenta Corriente')).toBeInTheDocument();
    expect(getByText(`Nro: ${nro}`)).toBeInTheDocument();
  })
})