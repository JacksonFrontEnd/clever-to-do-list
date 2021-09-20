import React from "react";
import { useState } from "react";
import { ToDoFormType } from "./types";

export const ToDoForm = (props: ToDoFormType) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(userInput);
    setUserInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
    {props.edit ? (
      <>
        <input
          placeholder='Update your item'
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          name='text'
        />
        <button onClick={handleSubmit} className='todo-button edit'>
          Update
        </button>
      </>
    ) : (
      <>
        <input
          placeholder='Add a todo'
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          name='text'
        />
        <button onClick={handleSubmit} className='todo-button'>
          Add todo
        </button>
      </>
    )}
  </form>
  );
}
