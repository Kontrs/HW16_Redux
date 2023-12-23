import styles from './Card.module.css';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editAnimal } from '../../redux/animals';

type CardProps = {
  id: number,
  image: string,
  name: string,
  habitat: string,
  onDelete?: () => void,
}

export const Card = ({id, image, name, habitat, onDelete}: CardProps): JSX.Element => {
  const [editMode, setEditMode] = useState(false)
  const [editFormValue, setEditFormValue] = useState({id, image, name, habitat});
  const dispatch = useDispatch();
  return( !editMode ? 
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
            onClick={() => setEditMode(true)}
          />
        </div>
      </div>
    ) : (
      <form action="submit" className='form' onSubmit={(e) => {
        e.preventDefault();
        dispatch(editAnimal(editFormValue))
        setEditMode(false)
        }}>
        <Input 
          type='text' 
          placeholder='Picture of the animal'
          required
          label='Add a link to the picture'
          name='image'
          value={editFormValue.image}
          onChange={(e) => {
            setEditFormValue({...editFormValue, image: e.target.value})
          }}
        />
        <Input 
          type='text' 
          placeholder='Animal'
          required
          label='What animal would you like to add?'
          name='animal'
          value={editFormValue.name}
          onChange={(e) => {
            setEditFormValue({...editFormValue, name: e.target.value})
          }}
        />
        <Input 
          type='text' 
          placeholder='Habitat'
          required
          label='Where does the animal live?'
          name='habitat'
          value={editFormValue.habitat}
          onChange={(e) => {
            setEditFormValue({...editFormValue, habitat: e.target.value})
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