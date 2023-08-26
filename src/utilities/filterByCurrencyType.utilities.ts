import { AccountInfo } from "../model/AccountInfo.model";
/**
 * Enumeración para los tipos de moneda.
 * @enum {string}
 */
export enum typeName {
  usd = 'u$s',
  pesos = '$'
}

/**
 * Filtra un array de objetos de AccountInfo por tipo de moneda.
 * @param {AccountInfo[]} data - Array de datos de AccountInfo a filtrar.
 * @returns {AccountInfo[]} - Array de datos filtrados.
 */
export const filterByCurrencyType = (data: AccountInfo[]) => data.filter(item => item.moneda === typeName.usd || item.moneda === typeName.pesos)

/**
 * Devuelve el nombre legible para un tipo de moneda.
 * @param {string} name - Nombre del tipo de moneda.
 * @returns {string} - Nombre legible para el tipo de moneda.
 */
export const returnName = (name: string) => {
  if (name == typeName.usd) return 'dólares';
  if (name == typeName.pesos) return 'pesos';
}