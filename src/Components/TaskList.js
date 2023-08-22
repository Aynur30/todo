import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({
  data,
  onSwitchState,
  onDelete,
  onToggleTimer,
  decreaseTime,
}) => {
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
              onSwitchState={onSwitchState}
              onDelete={onDelete}
              onToggleTimer={onToggleTimer}
              decreaseTime={decreaseTime}
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

TaskList.propTypes = {
  onSwitchState: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TaskList;
