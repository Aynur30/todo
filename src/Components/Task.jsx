import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import MainContext from './Сontext';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Task = ({ text, state, created, id, time }) => {
  const [createdTime, setCreatedTime] = useState('');
  const { switchTaskState, switchTaskTimer, deleteTask } = useContext(MainContext);

  const tick = () =>
    setCreatedTime(
      formatDistanceToNow(created, {
        includeSeconds: true,
      })
    );

  useEffect(tick);
  useEffect(() => {
    const timerID = setInterval(() => tick(), 5000);
    return () => clearInterval(timerID);
  });

  return (
    <div className="view">
      <input
        id={id}
        className="toggle"
        type="checkbox"
        onChange={() => switchTaskState(id)}
        checked={state}
      />
      <label htmlFor={id}>
        <span className="title">{text}</span>
        <span className="description">
          <label htmlFor={`iconPlay${id}`} className="icon icon-play" />
          <label htmlFor={`iconPause${id}`} className="icon icon-pause" />
          <input
            id={`iconPlay${id}`}
            type="button"
            style={{ display: 'none' }}
            onClick={() => switchTaskTimer(id, true)}
          />
          <input
            id={`iconPause${id}`}
            type="button"
            style={{ display: 'none' }}
            onClick={() => switchTaskTimer(id, false)}
          />
          " {Math.floor(time / 60)}:{time % 60} "
        </span>
        <span className="description">created {createdTime} ago</span>
      </label>
      <button className="icon icon-edit"></button>
      <button
        className="icon icon-destroy"
        onClick={() => deleteTask(id)}></button>
    </div>
  );
};

Task.defaultProps = {
  state: '',
};

Task.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Task;
