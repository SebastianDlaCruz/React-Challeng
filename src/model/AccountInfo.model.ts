/**
 * Interfaz que define la estructura de la información de una cuenta.
 * @interface
 */

export interface AccountInfo {
  e: string;
  n: string;
  t: string;
  saldo: string;
  moneda: string;
  tipo_letras: string
}

/**
 * Interfaz que define la estructura de los tipos de cuentas.
 * @interface
 */



export interface TypeOfAccounts {
  id: string;
  nombre: string;
}

/**
 * Interfaz que define la estructura de la respuesta de la API.
 * @interface
 */

export interface ApiResponse {
  status: boolean;
  data?: { cuentas: AccountInfo[], cuenta: TypeOfAccounts[] };
  statusText?: string;
}