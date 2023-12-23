import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type AnimalState = Animal[];

type Animal = {
  id: number,
  image: string,
  name: string,
  habitat: string
};

const storedAnimals = localStorage.getItem('animals');
const initialState = storedAnimals ? JSON.parse(storedAnimals) : '[]';
console.log(storedAnimals);

export const animalSlice = createSlice({
  name: 'animals', 
  initialState,
  reducers: {
    addAnimal: (state, action: PayloadAction<Animal>): Animal[] => {
      state.push(action.payload);
      localStorage.setItem('animals', JSON.stringify(state));

      return state;
    },
    deleteAnimal: (state, action: PayloadAction<number>): Animal[] => {
      const updatedArray = state.filter((animal: Animal): boolean => animal.id !== action.payload);
      localStorage.setItem('animals', JSON.stringify(updatedArray));

      return updatedArray;
    },
    editAnimal: (state, action: PayloadAction<Animal>) => {
      const findAnimal = state.find((animal: Animal) => animal.id === action.payload.id);

      if(findAnimal) {
        findAnimal.name = action.payload.name
        findAnimal.image = action.payload.image
        findAnimal.habitat = action.payload.habitat
      }

      localStorage.setItem('animals', JSON.stringify(state));
    },
    sortAnimalsAsc: (state) => {
      const sortedAnimals = state.sort((a: Animal, b: Animal) => a.name.localeCompare(b.name));
      localStorage.setItem('animals', JSON.stringify(sortedAnimals));

      return sortedAnimals;
    },
    sortAnimalsDesc: (state) => {
      const sortedAnimals = state.sort((a: Animal, b: Animal) => b.name.localeCompare(a.name));
      localStorage.setItem('animals', JSON.stringify(sortedAnimals));

      return sortedAnimals;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addAnimal, deleteAnimal, editAnimal, sortAnimalsAsc, sortAnimalsDesc } = animalSlice.actions

export default animalSlice.reducer