import styles from './Button.module.css';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: HTMLButtonElement['type'];
  size?: 'large' | 'small'
}

export const Button = ({text, type='button', size='large', onClick}: ButtonProps): JSX.Element => {

  return (
    <button 
      className={`${styles.button} ${size === 'small' ? styles.small : ''}`} 
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  )
}