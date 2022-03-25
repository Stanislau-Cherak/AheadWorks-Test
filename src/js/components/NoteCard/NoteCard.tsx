import React from "react";
import { useAppDispatch } from "../../hooks/hooks";

import { deleteNote } from "../../slices/NotesSlice";

import { NoteType } from "../../types/types";

import './NoteCard.scss';

const NoteCard: React.FC<NoteType> = ({ description, weather, time, date, id }) => {

  const { temperature, iconURL } = weather;
  const dispatch = useAppDispatch();

  const handleDeleteNote = (id: string) => {
    dispatch(deleteNote({id}));
  }

  return (
    <div className='note-card'>
      <div className='close-button'
        onClick={() => handleDeleteNote(id)}
      >
      </div>
      <div className='note-card_description'>{description}</div>
      <div className='note-card_weather'>
        <img src={iconURL}></img>
      </div>
      <div className='note-card_temperature'>{Math.round(temperature)} &deg;C</div>
      <div className='note-card_date'>{date}</div>
      <div className='note-card_time'>{time}</div>
    </div>
  )
}

export default NoteCard;
