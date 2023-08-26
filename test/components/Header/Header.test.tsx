import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from '../../../src/components/Header/Header';
describe('Header', () => {
  test('deberia rendizar el componente con el text', () => {

    const { getByText } = render(<Header />);
    const headerElement = getByText('Prueba');
    expect(headerElement).toBeInTheDocument();
  })
});