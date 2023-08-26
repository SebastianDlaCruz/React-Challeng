import { act, renderHook } from '@testing-library/react-hooks';
import usePagination from '../../src/hook/usePagination';
import { AccountInfo } from '../../src/model/AccountInfo.model';

test('pagination', () => {
  const initialData: AccountInfo[] = [{
    "e": "1",
    "n": "872378326701",
    "t": "02",
    "saldo": "1500",
    "moneda": "u$s",
    "tipo_letras": "CC"
  },
  {
    "e": "1",
    "n": "872378326702",
    "t": "01",
    "saldo": "-600",
    "moneda": "$",
    "tipo_letras": "Cc"
  }];

  const itemsPerPage = 6;

  const { result } = renderHook(() =>
    usePagination({ initialData, itemsPerPage })
  );

  const { nextPage, backPage, items, currentPage } = result.current;

  expect(items).toEqual([{
    "e": "1",
    "n": "872378326701",
    "t": "02",
    "saldo": "1500",
    "moneda": "u$s",
    "tipo_letras": "CC"
  },
  {
    "e": "1",
    "n": "872378326702",
    "t": "01",
    "saldo": "-600",
    "moneda": "$",
    "tipo_letras": "Cc"
  }]); // Verifica los elementos en la primera página

  act(() => {
    nextPage(); // Cambiar a la siguiente página
  });

  expect(items).toEqual([{
    "e": "1",
    "n": "872378326701",
    "t": "02",
    "saldo": "1500",
    "moneda": "u$s",
    "tipo_letras": "CC"
  },
  {
    "e": "1",
    "n": "872378326702",
    "t": "01",
    "saldo": "-600",
    "moneda": "$",
    "tipo_letras": "Cc"
  }]);

  expect(currentPage).toBe(1);

  act(() => {
    backPage(); // Volver a la página anterior
  });

  expect(items).toEqual([{
    "e": "1",
    "n": "872378326701",
    "t": "02",
    "saldo": "1500",
    "moneda": "u$s",
    "tipo_letras": "CC"
  },
  {
    "e": "1",
    "n": "872378326702",
    "t": "01",
    "saldo": "-600",
    "moneda": "$",
    "tipo_letras": "Cc"
  }]); // Verifica que los elementos vuelvan a ser los de la primera página
  expect(currentPage).toBe(1); // Verifica que la página actual haya vuelto a ser la primera
});