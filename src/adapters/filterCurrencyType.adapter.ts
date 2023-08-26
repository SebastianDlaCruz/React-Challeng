/**
 * Enumeración para los tipos de cuenta.
 * @enum {string}
 */

export enum type {
  CC = 'CC',
  CA = 'CA',
  CCP = 'CCP',


}
/**
 * Filtra el tipo de moneda en un nombre legible.
 * @param {string} typeCurrent - Tipo de moneda actual.
 * @returns {string} - Nombre legible del tipo de cuenta.
 */
export const filterCurrencyType = (typeCurrent: string) => {
  if (typeCurrent.toUpperCase() === type.CC) return 'Cuenta Corriente';
  if (typeCurrent.toUpperCase() === type.CA) return 'Caja de Ahorro';
  if (typeCurrent.toUpperCase() === type.CCP) return 'Cuenta Corriente';
}