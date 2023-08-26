import { Link } from "react-router-dom";
import { filterCurrencyType } from "../../adapters/filterCurrencyType.adapter";
import './Card.css';

/**
 * Propiedades para el componente Card.
 * @typedef {Object} CardProps
 * @property {string} accountType - Tipo de cuenta.
 * @property {string} nro - Número de cuenta.
 */

/**
 * Componente de tarjeta reutilizable.
 * @param {CardProps} props - Propiedades de la tarjeta.
 * @returns {JSX.Element} - Elemento JSX que representa la tarjeta.
 */

interface Props {
  accountType: string;
  nro: string
}


const Card = ({ accountType, nro }: Props) => {

  return (
    <Link to={`tipo_de_cuenta/${nro}`} className={'card'}>
      <span>{filterCurrencyType(accountType)}</span>
      <span>Nro: {nro}</span>
    </Link>
  )
}

export default Card
