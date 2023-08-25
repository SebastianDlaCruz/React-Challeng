import { Link, useParams } from "react-router-dom";
import { filterCurrencyType } from "../../adapters/filterCurrencyType.adapter";
import Header from "../../components/Header/Header";
import useAccountInfo from "../../hook/useAccountInfo";
import { filterAccount } from "../../utilities/filterAccount.utilities";
import { returnName } from "../../utilities/filterByCurrencyType.utilities";
import './Balance.css';

const Balance = () => {
  const {data,isSuccess}=useAccountInfo();
  const {idCuenta}= useParams();
  const item = filterAccount(idCuenta,data);

  return (
    <>
    <Header/>
    <main>
      <p>Consulta de Saldo</p>
      <h1>Este es tu saldo actual</h1>
      <section className="section-balance">
        {
          isSuccess && item !== undefined?(
          <>
            <p>Saldo de la cuenta {item.saldo}</p>
            <p>Tipo de cuenta : {filterCurrencyType(item.tipo_letras)} en  {returnName(item.moneda)}</p>
            <p>Numero de cuenta: {item.n}</p>
            </>
          ):(<p>...cargando</p>)
        }

      </section>

    <Link to={'/'} className="link">Salir</Link>  

    </main>
      
    </>
  )
}

export default Balance
