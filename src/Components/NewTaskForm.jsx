import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ addTask }) => {
  const [value, setValue] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    setValue('');
    setMin('');
    setSec('');
    addTask(value, (+min * 60 || 0) + (+sec || 0));
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit} className="new-todo-form">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          value={sec}
          onChange={(e) => setSec(e.target.value)}
        />
        <button style={{ display: 'none' }}></button>
      </form>
    </header>
  );
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func,
};

export default NewTaskForm;
