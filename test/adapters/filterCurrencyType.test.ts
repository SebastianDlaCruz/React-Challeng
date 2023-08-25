import { filterCurrencyType, type } from '../../src/adapters/filterCurrencyType.adapter';


describe('filtrar las diferentes Tipo de cuentas', () => {
  it('Cuenta Corriente,paso de parámetros tanto mayúsculas como minúsculas.', () => {
    expect(filterCurrencyType(type.CC)).toBe("Cuenta Corriente")
    expect(filterCurrencyType('Cc')).toBe("Cuenta Corriente")
    expect(filterCurrencyType('cc')).toBe("Cuenta Corriente")
  })
  it('Cuenta de Ahorro,paso de parámetros tanto mayúsculas como minúsculas.', () => {
    expect(filterCurrencyType(type.CA)).toBe("Caja de Ahorro")
    expect(filterCurrencyType('cA')).toBe("Caja de Ahorro")
    expect(filterCurrencyType('Ca')).toBe("Caja de Ahorro")

  })
  it('Cuenta Corriente, la api tiene un error CCP. Se supone que es Cuenta Corriente', () => {
    expect(filterCurrencyType(type.CCP)).toBe("Cuenta Corriente")
  })
})