import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";

import classNames from 'classnames';

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
    if (e.target.value.length <= maxLength) {
      setInputValue(e.target.value);
      setCountOverflow(false);
      return;
    }
    setCountOverflow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length) {
      dispatch(addNote(inputValue));
      setInputValue('');
      setCountOverflow(false);
    }
  };

  return (
    <div className='input-section'>
      <span className='input-section_title title'>Add note...</span>
      <div className='input-section_form'>
        <form onSubmit={handleSubmit}>
          <input
            className={countOverflow ? classNames('input-section_input', 'alarm_input') : 'input-section_input'}
            type='text'
            placeholder="New note"
            value={inputValue}
            onChange={handleOnChange}
          >
          </input>
        </form>
        <span className={countOverflow ? classNames('input-section_title', 'alarm') : 'input-section_title'}>{inputValue.length}/{maxLength}</span>
      </div>
      {countOverflow
        &&
        <span className='input-section_title alarm'>You have exceeded the number of characters. Maximum quantity is {maxLength}.</span>
      }
    </div>
  )
}

export default InputSection;
