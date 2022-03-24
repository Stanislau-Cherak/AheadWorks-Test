import React from "react";

import InputSection from "../InputSection/InputSection";


import './App.scss';

const App: React.FC=()=>{
  
  return (
    <div className="container">
    <InputSection maxLength={10}/>
    </div>
    
  )
}

export default App;
