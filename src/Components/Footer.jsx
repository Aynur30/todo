import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from './TasksFilter';

const Footer = ({ tasksLeft, clearCompletedTasks }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksLeft} items left</span>
      <TasksFilter />
      <button className="clear-completed" onClick={clearCompletedTasks}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  tasksLeft: 0,
};

Footer.propTypes = {
  tasksLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  clearCompletedTasks: PropTypes.func,
};

export default Footer;
