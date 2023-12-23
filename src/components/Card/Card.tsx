import styles from './Card.module.css';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { useState } from 'react';

type CardProps = {
  id: number,
  image: string,
  name: string,
  habitat: string,
  onDelete?: () => void,
  onEdit?: () => void,
  isEditing: boolean
}
const initFormValue = {image: '', name: '', habitat: ''}

export const Card = ({id, image, name, habitat, onDelete, onEdit, isEditing}: CardProps): JSX.Element => {
  const [inputFormValue, setInputFormValue] = useState(initFormValue);
  return( !isEditing ? 
    (<div key={id} className={styles.card}>
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
            onClick={onEdit}
          />
        </div>
      </div>
    ) : (
      <form action="submit" className='form' onSubmit={(e) => {
        e.preventDefault();
        setInputFormValue(initFormValue);
        isEditing = false
        console.log('hi')
        }}>
        <Input 
          type='text' 
          placeholder='Picture of the animal'
          required
          label='Add a link to the picture'
          name='image'
          value={image}
          onChange={(e) => {
            setInputFormValue({...inputFormValue, image: e.target.value})
          }}
        />
        <Input 
          type='text' 
          placeholder='Animal'
          required
          label='What animal would you like to add?'
          name='animal'
          value={name}
          onChange={(e) => {
            setInputFormValue({...inputFormValue, name: e.target.value})
          }}
        />
        <Input 
          type='text' 
          placeholder='Habitat'
          required
          label='Where does the animal live?'
          name='habitat'
          value={habitat}
          onChange={(e) => {
            setInputFormValue({...inputFormValue, habitat: e.target.value})
          }}
        />
        <Button
          text='Save'
          size='small'
          type='submit'
        />
      </form>
    )
  
    
  )
}