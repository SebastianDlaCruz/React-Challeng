import { AccountInfo } from "../model/AccountInfo.model";

/**
 * Filtra una cuenta específica de un array de objetos AccountInfo.
 * @param {string | undefined} id - ID de la cuenta a filtrar.
 * @param {AccountInfo[]} data - Array de datos de AccountInfo.
 * @returns {AccountInfo | undefined} - Objeto AccountInfo que coincide con el ID o undefined si no se encuentra.
 */
export const filterAccount = (id: string | undefined, data: AccountInfo[]) => {
  if (id) {
    const [response] = data.filter(item => item.n === id);
    return response;
  }
}