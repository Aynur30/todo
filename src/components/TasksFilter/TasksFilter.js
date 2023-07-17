import './TasksFilter.css';

function TasksFilter({ setFilter, filter }) {
  return (
    <ul className="filters">
      <li>
        <button type="button" className={filter === 'All' ? 'selected' : ''} onClick={() => setFilter('All')}>
          All
        </button>
      </li>
      <li>
        <button type="button" className={filter === 'Active' ? 'selected' : ''} onClick={() => setFilter('Active')}>
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          className={filter === 'Completed' ? 'selected' : ''}
          onClick={() => setFilter('Completed')}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

export default TasksFilter;
