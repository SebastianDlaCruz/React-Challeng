export enum type{
  CC = 'CC',
  CA  = 'CA',
  CCP = 'CCP',


}

export const filterCurrencyType = (typeCurrent: string) =>{
  if(typeCurrent.toUpperCase() === type.CC) return 'Cuenta Corriente';
  if(typeCurrent.toUpperCase() === type.CA) return 'Caja de Ahorro';
  if(typeCurrent.toUpperCase() === type.CCP) return 'Cuenta Corriente';
}