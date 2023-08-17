import { useContext } from 'react';

import Context from './Сontext';

import TasksFilterButton from './TasksFilterButton';

const TasksFilter = () => {
  const { currentFilter } = useContext(Context);
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
