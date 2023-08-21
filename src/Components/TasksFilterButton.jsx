import { useContext } from 'react';

import PropTypes from 'prop-types';
import MainContext from './Сontext';

const TasksFilterButton = ({ value, className }) => {
  const { toggleTasksFilter } = useContext(MainContext);
  return (
    <label htmlFor={value} className={className}>
      <input
        style={{ display: 'none' }}
        type="radio"
        name="TasksFilterButton"
        id={value}
        value={value}
        onChange={(e) => toggleTasksFilter(e.target.value)}
      />
      {value}
    </label>
  );
};

TasksFilterButton.defaultProps = {
  className: '',
};

TasksFilterButton.propTypes = {
  value: PropTypes.string.isRequired,
};

export default TasksFilterButton;
