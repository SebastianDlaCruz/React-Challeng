import { useEffect, useState } from "react";
import { AccountInfo } from "../model/AccountInfo.model";
import { getAccountInfo } from "../services/getAccountInfo.services";
import { filterByCurrencyType } from "../utilities/filterByCurrencyType.utilities";

/**
 * Hook personalizado para obtener y filtrar información de cuentas.
 * @returns {{
*   data: AccountInfo[],
*   message: string,
*   isSuccess: boolean
* }} - Datos y estado del proceso de obtención de información de cuentas.
*/

const useAccountInfo = () => {

  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const [data, setData] = useState<AccountInfo[]>([]);

  useEffect(() => {
    getAccountInfo().then(newData => {
      if (newData.status && newData.data !== undefined) {
        setData(filterByCurrencyType(newData.data.cuentas));
      } else if (newData.status === false && newData.statusText !== undefined) {
        setMessage(newData.statusText);
        setIsSuccess(false);
        setData([]);
      }
    });
  }, [])
  return { data, message, isSuccess }
}

export default useAccountInfo
