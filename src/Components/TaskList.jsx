import React, {useContext} from 'react';
import Task from './Task';

const TaskList = ({value}) => {
  
  return (
    <ul className="todo-list">
      {value.map((task) => {
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
