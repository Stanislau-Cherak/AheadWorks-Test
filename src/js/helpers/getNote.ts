import { getIconURL } from "./getIconURL";
import { getTime } from "./getTime";
import { getDate } from "./getDate";

import uniqid from 'uniqid';

import { NoteType } from "../types/types";

export const getNote = (description: string, temp: number, icon: string): NoteType => {
  return {
    description: description,
    weather: {
      temperature: temp,
      iconURL: getIconURL(icon),
    },
    time: getTime(),
    date: getDate(),
    id: uniqid('note-'),
  };
}