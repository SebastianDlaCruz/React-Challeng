import { act, renderHook } from '@testing-library/react-hooks';
import useAccountInfo from '../../src/hook/useAccountInfo';
import { ApiResponse } from '../../src/model/AccountInfo.model';
jest.mock('../../src/services/getAccountInfo.services', () => ({
  getAccountInfo: jest.fn(() =>
    Promise.resolve<ApiResponse>({
      status: true,
      data: {
        cuentas: [
          {
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
          }
        ],
        cuenta: [
          {
            id: '',
            nombre: ''
          }
        ]
      }
    })
  ),
}));

jest.mock('../../src/utilities/filterByCurrencyType.utilities', () => ({
  filterByCurrencyType: jest.fn((data) => data),
}));

test('fetches y filtros de cuentas', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAccountInfo());

  await act(async () => {
    await waitForNextUpdate();
  });

  const { data, message, isSuccess } = result.current;

  expect(data).toEqual([
    {
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
    }
  ]);
  expect(message).toBe('');
  expect(isSuccess).toBe(true);
});