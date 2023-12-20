import styles from './Input.module.css'

type inputProps = {
  type: HTMLInputElement['type'],
  label?: string,
  placeholder: string,
  required: boolean,
  name: string,
  value: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({type, label, placeholder, required=true, name, value, onChange}: inputProps): JSX.Element => {

  return(
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        className={styles.input}
        type={type}
        id={name}
        placeholder={placeholder}
        required={required} 
        onChange={onChange}
        value={value}/>
    </div>
  )
}