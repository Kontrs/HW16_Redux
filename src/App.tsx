import { useDispatch, useSelector } from 'react-redux';
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { Input } from './components/Input/Input';
import { addAnimal, deleteAnimal, editAnimal, sortAnimalsAsc, sortAnimalsDesc } from './redux/animals';
import { useState } from 'react';
import { RootState } from './redux/store';
import './app.css';

type Animal = {
  id: number
  image: string,
  name: string,
  habitat: string
}
const initFormValue = {image: '', name: '', habitat: ''}


function App(): JSX.Element {
  const [inputFormValue, setInputFormValue] = useState(initFormValue);
  const animals = useSelector((state: RootState) => state.animals);
  const dispatch = useDispatch();

  return (
    <>
    <section className='wrapper'>
      <div className='sortWrapper'>
        <Button
          text='Sort by name ↑'
          onClick={() => dispatch(sortAnimalsAsc())}
        />
        <Button
          text='Sort by name ↓'
          onClick={() => dispatch(sortAnimalsDesc())}
        />
      </div>
      <div className='cardWrapper'>
      {animals.length ? animals.map((animal: Animal): JSX.Element => {
        return (
          <Card 
            key={animal.id}
            id={animal.id}
            image={animal.image}
            name={animal.name}
            habitat={animal.habitat}
            onDelete={() => dispatch(deleteAnimal(animal.id))}
            onEdit={() =>dispatch(editAnimal(animal.id))}/>
        )
      }) : <div>No animals found.</div>}
      </div>
      <form action="submit" className='form' onSubmit={(e) => {
            e.preventDefault();
            dispatch(addAnimal( {id: Math.random(), ...inputFormValue}));
            setInputFormValue(initFormValue);
            }}>
        <Input 
          type='text' 
          placeholder='Picture of the animal'
          required
          label='Add a link to the picture'
          name='image'
          value={inputFormValue.image}
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
          value={inputFormValue.name}
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
          value={inputFormValue.habitat}
          onChange={(e) => {
            setInputFormValue({...inputFormValue, habitat: e.target.value})
          }}
        />
        <Button
          text='Add animal'
          size='small'
          type='submit'
        />
      </form>
    </section>
    </>
  )
}

export default App
