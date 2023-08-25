import { AccountInfo } from "../model/AccountInfo.model";
export enum typeName {
  usd = 'u$s',
  pesos = '$'
}

export const filterByCurrencyType = (data: AccountInfo[]) => data.filter(item => item.moneda === typeName.usd || item.moneda === typeName.pesos)

export const returnName = (name: string) => {
  if (name == typeName.usd) return 'dólares';
  if (name == typeName.pesos) return 'pesos';
}