import '../Card/Card.css';

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
