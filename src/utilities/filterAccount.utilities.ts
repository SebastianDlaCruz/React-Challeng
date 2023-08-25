import { AccountInfo } from "../model/AccountInfo.model";

export const filterAccount = (id:string | undefined, data: AccountInfo[]) => {
  if(id){
    const [response] = data.filter(item => item.n === id);
    return response;
  }
}