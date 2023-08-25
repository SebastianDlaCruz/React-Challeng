import { useEffect, useState } from "react";
import { AccountInfo } from "../model/AccountInfo.model";
import { getAccountInfo } from "../services/getAccountInfo.services";
import { filterByCurrencyType } from "../utilities/filterByCurrencyType.utilities";
const useAccountInfo = () => {
  const [data,setData] = useState<AccountInfo[]>([]);
  const [message,setMessage] = useState('');
  const [isSuccess,setIsSuccess] = useState(true);

  useEffect(()=>{
    getAccountInfo().then(newData => {
       if(newData.status &&  newData.data !== undefined){
          setData(filterByCurrencyType(newData.data.cuentas));
       }else if(newData.status === false && newData.statusText !== undefined){
        setMessage(newData.statusText);
        setIsSuccess(false);
       }
    });
  },[])
  return {data,message,isSuccess}
}

export default useAccountInfo
