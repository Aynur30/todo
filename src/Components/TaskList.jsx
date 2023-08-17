import React from 'react';
import Task from './Task';

const TaskList = ({ data }) => {
  return (
    <ul className="todo-list">
      {data.map((task) => {
        return (
          <li className={task.state} key={task.id}>
            <Task
              text={task.text}
              state={task.state}
              created={task.created}
              id={task.id}
              time={task.time}
              going={task.going}
            />
          </li>
        );
      })}
    </ul>
  );
};

TaskList.defaultProps = {
  data: [],
};

export default TaskList;
