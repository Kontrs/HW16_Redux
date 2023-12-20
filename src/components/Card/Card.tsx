import styles from './Card.module.css';
import { Button } from '../Button/Button';

type CardProps = {
  id: number,
  image: string,
  name: string,
  habitat: string,
  onDelete?: () => void,
  onEdit?: () => void
}

export const Card = ({id, image, name, habitat, onDelete, onEdit}: CardProps): JSX.Element => {

  return(
    <div key={id} className={styles.card}>
      <img className={styles.image} src={image} alt={name}/>
      <p className={styles.text}><b>Animal:</b> {name}</p>
      <p className={styles.text}><b>Habitat:</b> {habitat}</p>
      <div className={styles.buttonWrapper}>
        <Button 
          text='Delete' 
          size='small' 
          onClick={onDelete}/>
        <Button 
          text='Edit' 
          size='small' 
          onClick={onEdit}/>
      </div>
    </div>
  )
}