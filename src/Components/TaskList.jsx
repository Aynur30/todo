import React, {useContext} from 'react';
import Task from './Task';
import MainContext from './Сontext'

const TaskList = ({value}) => {

  const { taskControls} = useContext(MainContext);
  return (
    <ul className="todo-list">
      {value.map((task) => {
        return (
          <li className={task.state} key={task.id}>
            <MainContext.Provider value={taskControls}>
              <Task
                text={task.text}
                state={task.state}
                created={task.created}
                id={task.id}
                time={task.time}
                going={task.going}
              />
            </MainContext.Provider>
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
