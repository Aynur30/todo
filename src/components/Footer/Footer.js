import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

function Footer({ setFilter, filter, deleteTasksCompleted, tasks }) {
  const countTasksLeft = tasks.filter((task) => !task.isCompleted).length;
  return (
    <footer className="footer">
      <span className="todo-count">
        {countTasksLeft}
        items left
      </span>
      <TasksFilter setFilter={setFilter} filter={filter} />
      <button type="button" className="clear-completed" onClick={deleteTasksCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
