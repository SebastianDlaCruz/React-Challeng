import { AccountInfo } from '../../src/model/AccountInfo.model';
import { filterByCurrencyType, returnName, typeName } from '../../src/utilities/filterByCurrencyType.utilities';

describe('filtro por tipo de moneda y retorna los textos pesos o dólares', () => {

  const cuentas: AccountInfo[] = [
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
    },
    {
      "e": "1",
      "n": "272378326702",
      "t": "01",
      "saldo": "-600",
      "moneda": "$uy",
      "tipo_letras": "Cc"
    }];
  const respuesta: AccountInfo[] = [
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
    }]
  test('filtro por tipo de moneda', () => {

    const result = filterByCurrencyType(cuentas);

    expect(result).toEqual(respuesta);
  })

  test('retorna los textos pesos o dólares', () => {
    const dolar = returnName(typeName.usd);
    expect(dolar).toBe('dólares');

    const peso = returnName(typeName.pesos);
    expect(peso).toBe('pesos');
  })

});