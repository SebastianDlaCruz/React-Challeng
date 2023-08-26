import '../Card/Card.css';

/**
 * Propiedades para el componente Button.
 * @typedef {Object} ButtonProps
 * @property {string} text - Texto que se mostrará en el botón.
 * @property {() => void} onClick - Función a ejecutar cuando se hace clic en el botón.
 */

/**
 * Componente de botón reutilizable.
 * @param {ButtonProps} props - Propiedades del botón.
 * @returns {JSX.Element} - Elemento JSX que representa el botón.
 */

interface Props {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: Props) => {
  return (
    <button className='card' onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
