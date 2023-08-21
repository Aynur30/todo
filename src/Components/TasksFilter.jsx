import { useContext } from 'react';

import MainContext from './Сontext';

import TasksFilterButton from './TasksFilterButton';

const TasksFilter = () => {
  const { currentFilter } = useContext(MainContext);
  return (
    <ul className="filters">
      <li>
        <TasksFilterButton
          className={currentFilter === 'All' ? 'selected' : ''}
          value="All"
        />
      </li>
      <li>
        <TasksFilterButton
          className={currentFilter === 'Active' ? 'selected' : ''}
          value="Active"
        />
      </li>
      <li>
        <TasksFilterButton
          className={currentFilter === 'Completed' ? 'selected' : ''}
          value="Completed"
        />
      </li>
    </ul>
  );
};

export default TasksFilter;
