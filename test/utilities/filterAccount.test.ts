import { AccountInfo } from '../../src/model/AccountInfo.model';
import { filterAccount } from '../../src/utilities/filterAccount.utilities';

describe('filtro de cuentas ', () => {

  const cuentas: AccountInfo[] = [{
    e: 'a',
    moneda: 'a',
    n: '872378326701',
    saldo: '1',
    t: '1',
    tipo_letras: 'cc'
  },
  {
    e: 'a',
    moneda: 'a',
    n: '233432231',
    saldo: '1',
    t: '1',
    tipo_letras: 'cc'
  }];

  test('pasa como parámetro el id y las cuentas', () => {
    const result = filterAccount('872378326701', cuentas)
    expect(result).toEqual(cuentas[0]);
  })

  test('pasa como parámetro el id que no existe y las cuentas', () => {
    const result = filterAccount('3', cuentas)
    expect(result).toBeUndefined();
  })
})