import React from 'react';
import PropTypes from 'prop-types';
import './TasksFilter.css';

function TasksFilter({ setFilter, filter }) {
  const filterOptions = ['All', 'Active', 'Completed'];

  return (
    <ul className="filters">
      {filterOptions.map((option) => (
        <li key={option}>
          <button
            type="button"
            className={filter === option ? 'selected' : ''}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

TasksFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.oneOf(['All', 'Active', 'Completed']).isRequired,
};

export default TasksFilter;
