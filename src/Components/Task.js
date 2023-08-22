import React from 'react';
import PropTypes from 'prop-types';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      created: formatDistanceToNow(this.props.created, {
        includeSeconds: true,
      }),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      created: formatDistanceToNow(this.props.created, {
        includeSeconds: true,
      }),
    });
  };

  render() {
    let { id, text, time, state, onSwitchState, onDelete, onToggleTimer } =
      this.props;
    let { created } = this.state;
    return (
        <div className="view">
          <input
            id={id}
            className="toggle"
            type="checkbox"
            onChange={() => onSwitchState(id)}
            checked={state}
          />
          <label htmlFor={id}>
            <span className="title">{text}</span>
            <span className="description">
              <label htmlFor={`iconPlay${id}`} className="icon icon-play" />
              <label htmlFor={`iconPause${id}`} className="icon icon-pause" />
              <input
                id={`iconPlay${id}`}
                type="radio"
                name={`iconTimer${id}`}
                style={{ display: 'none' }}
                onChange={() => {
                  onToggleTimer(id, true);
                }}
              />
              <input
                id={`iconPause${id}`}
                type="radio"
                name={`iconTimer${id}`}
                style={{ display: 'none' }}
                onChange={() => {
                  onToggleTimer(id, false);
                }}
              />
              " {Math.floor(time / 60)}:{time % 60} "
            </span>
            <span className="description">created {created} ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button
            className="icon icon-destroy"
            onClick={() => onDelete(id)}></button>
        </div>
    );
  }
}

Task.defaultProps = {
  state: '',
};

Task.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSwitchState: PropTypes.func,
  onDelete: PropTypes.func,
  onToggleTimer: PropTypes.func,
  decreaseTime: PropTypes.func,
};

export default Task;
