import React from 'react';
import Task from './Task';

const TaskList = ({ d }) => {

  const { data} = useContext(Context);
  return (
    <ul className="todo-list">
      {data.map((task) => {
        return (
          <li className={task.state} key={task.id}>
            <Context.Provider value={taskControls}>
            <Task
              text={task.text}
              state={task.state}
              created={task.created}
              id={task.id}
              time={task.time}
              going={task.going}
            />
            </Context.Provider>
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
