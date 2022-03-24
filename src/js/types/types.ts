export type WeatherType={
  temperature: number,
  iconURL: string,
}

export type NoteType={
  description:string,
  weather: WeatherType,
  time: string,
  date: string,
  id: string,
}

export type NotesType=NoteType[];
