import React from "react";
import { useAppSelector } from "../../hooks/hooks";

import { getState } from "../../helpers/getState";

import { NotesType } from "../../types/types";

import NoteCard from "../NoteCard/NoteCard";

import './NotesList.scss';

const NotesList: React.FC = () => {

  const notes:NotesType = useAppSelector(getState);

  return (
    <ul className='note-cards'>
      {notes.map((note) => (
        <NoteCard key={note.id} {...note} />
      ))}
    </ul>
  )
}

export default NotesList;
