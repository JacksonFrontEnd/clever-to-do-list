import React, { useState } from 'react';
import { ToDoFormType } from './types';

export const ToDoForm = (props: ToDoFormType): JSX.Element => {
  const [userInput, setUserInput] = useState('');
  const { edit, onSubmit } = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onSubmit(userInput);
    setUserInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {edit ? (
        <>
          <input
            placeholder="Update your item"
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            name="text"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="todo-button edit"
          >
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            name="text"
          />
          <button type="button" onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
};
