import { ApiResponse } from '../../src/model/AccountInfo.model';
import { getAccountInfo } from '../../src/services/getAccountInfo.services';

describe('Llamada a la información de la api del backend', () => {

  test('devolución de las cuentas', async () => {
    const response: ApiResponse = {
      status: true,
      data: {
        cuentas: [{
          e: 'a',
          moneda: 'a',
          n: 'd',
          saldo: '1',
          t: '1',
          tipo_letras: 'cc'
        }],
        cuenta: [
          {
            id: "1",
            nombre: "algo"

          }
        ]
      }
    }

    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => response.data,
    });

    const result = await getAccountInfo();

    expect(result).toEqual(response);
  });
  test('error al devolver las cuentas', async () => {

    jest.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('Erro al consumir la api'));

    const result = await getAccountInfo();

    expect(result.status).toBe(false);
    expect(result.statusText).toBe('Error al consumir la api');

  })
})