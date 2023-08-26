import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Button from '../../../src/components/Button/Button';

describe('Button', () => {

  it('debería renderizar el texto y ejecutar onClick', () => {

    const buttonText = 'Click me';
    const onClickMock = jest.fn();

    const { getByText } = render(
      <Button text={buttonText} onClick={onClickMock} />
    );

    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  })
})
