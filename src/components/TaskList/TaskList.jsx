import React from 'react';
import PropTypes from 'prop-types';

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

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      isCompleted: PropTypes.bool.isRequired,
      editMode: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleTaskCompleted: PropTypes.func.isRequired,
  toggleTaskEditMode: PropTypes.func.isRequired,
  changeTaskText: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  filter: PropTypes.oneOf(['All', 'Active', 'Completed']).isRequired,
};

export default TaskList;
