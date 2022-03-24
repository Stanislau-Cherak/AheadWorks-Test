import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";

import { ClassNames } from "@emotion/react";

import { addNote } from "../../slices/NotesSlice";

import './InputSection.scss';

interface InputSectionProps {
  maxLength: number,
}

const InputSection: React.FC<InputSectionProps> = ({ maxLength }) => {

  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const [countOverflow, setCountOverflow] = useState<boolean>(false);

  const handleOnChange = (e) => {
    if (inputValue.length <= maxLength - 1) {
      setInputValue(e.target.value);
      return;
    }
    setCountOverflow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length) {
      dispatch(addNote(inputValue));
      setInputValue('');
    }
  };


  return (
    <div className='input-section'>
      <span className='input-section_title'>Add note...</span>
      <div className='input-section_form'>
        <form onSubmit={handleSubmit}>
          <input
          className="input-section_input"
            type='text'
            placeholder="New note"
            value={inputValue}
            onChange={handleOnChange}
          >
          </input>
        </form>
        <span className='input-section_title message-length'>{inputValue.length}/{maxLength}</span>
      </div>
      {countOverflow
        &&
        <span className='input-section_warning'>You have exceeded the number of characters. Maximum quantity is {maxLength}.</span>
      }
    </div>
  )
}

export default InputSection;
