export interface AccountInfo{
  e:string;
  n:string;
  t:string;
  saldo: string;
  moneda: string;
  tipo_letras:string
}

export interface TypeOfAccounts{
  id: string;
  nombre: string;
}


export interface ApiResponse{
    status: boolean;
    data?: {cuentas: AccountInfo[],cuenta:TypeOfAccounts[]};
    statusText?: string;
}