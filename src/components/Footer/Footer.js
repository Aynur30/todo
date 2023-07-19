import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

function Footer({ setFilter, filter, deleteTasksCompleted, tasks }) {
  const countTasksLeft = tasks.filter((task) => !task.isCompleted).length;
  return (
    <footer className="footer">
      <span className="todo-count">
        {countTasksLeft} {countTasksLeft === 1 ? 'item' : 'items'} left
      </span>
      <TasksFilter setFilter={setFilter} filter={filter} />
      <button type="button" className="clear-completed" onClick={deleteTasksCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.oneOf(['All', 'Active', 'Completed']).isRequired,
  deleteTasksCompleted: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      isCompleted: PropTypes.bool.isRequired,
      editMode: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Footer;

