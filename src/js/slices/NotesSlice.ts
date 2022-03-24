import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { REQUEST_LINK } from '../constants/constants';
import { getNote } from '../helpers/getNote';


export const addNote = createAsyncThunk(
  'notes/addNote',
  async function (description:string) {
    const response = await fetch(REQUEST_LINK);
    const data = await response.json();
    const note=await getNote(description, data.main.temp, data.weather[0].icon);
    return note;
  }
);

const notesSlice = createSlice({
  name: 'NOTES',
  initialState: [],
  reducers: {
    deleteNote(state, action) {
      return state.filter((note) => note.id !== action.payload.id);
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(addNote.fulfilled, (state, action)=>{
      state.push({ ...action.payload });
    })
  },
});

export const { deleteNote } = notesSlice.actions;
export const { reducer: notesReducer } = notesSlice;
