import Task from '../Task/Task';
import './TaskList.css';

function TaskList({ tasks, toggleTaskCompleted, toggleTaskEditMode, changeTaskText, deleteTask, filter }) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    if (filter === 'Active') {
      return !task.isCompleted;
    }
    if (filter === 'Completed') {
      return task.isCompleted;
    }
    return true;
  });

  const tasksComponents = filteredTasks.map((task) => (
    <li key={task.id} className={`${task.isCompleted ? 'completed' : ''} ${task.editMode ? 'editing' : ''}`}>
      <Task
        task={task}
        toggleTaskCompleted={toggleTaskCompleted}
        toggleTaskEditMode={toggleTaskEditMode}
        changeTaskText={changeTaskText}
        deleteTask={deleteTask}
      />
    </li>
  ));
  return <ul className="todo-list">{tasksComponents}</ul>;
}

export default TaskList;
