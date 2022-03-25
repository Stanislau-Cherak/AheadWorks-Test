import React from "react";

import InputSection from "../InputSection/InputSection";
import NotesList from '../NotesList/NotesList';


import './App.scss';

const App: React.FC = () => {

  return (
    <div className="container">
      <NotesList />
      <InputSection maxLength={10} />
    </div>

  )
}

export default App;
