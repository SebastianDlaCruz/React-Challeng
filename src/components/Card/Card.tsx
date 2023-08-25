import { Link } from "react-router-dom";
import { filterCurrencyType } from "../../adapters/filterCurrencyType.adapter";
import './Card.css';
interface Props {
  accountType:string;
  nro: string
}


const Card = ({accountType,nro}: Props) => {
  return (
    <Link to={`tipo_de_cuenta/${nro}`} className="card">
      <span>{filterCurrencyType(accountType)}</span>
      <span>Nro: {nro}</span>
    </Link>
  )
}

export default Card
