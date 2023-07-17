import { formatDistanceToNow } from 'date-fns';
import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    const { task } = props;
    this.editFieldRef = React.createRef();
    this.state = {
      editiValue: task.text,
    };
  }

  onChangeEditiValue = (e) => {
    this.setState({
      editiValue: e.target.value,
    });
  };

  onBlurEditField = () => {
    const { task, toggleTaskEditMode, changeTaskText } = this.props;
    const { editiValue } = this.state;

    toggleTaskEditMode(task.id);
    changeTaskText(task.id, editiValue);
  };

  onClickEdit = async () => {
    const { task, toggleTaskEditMode } = this.props;

    await toggleTaskEditMode(task.id);
    this.editFieldRef.current.focus();
  };

  render() {
    const { task, toggleTaskCompleted, deleteTask } = this.props;
    const { editiValue } = this.state;

    return (
      <>
        <div className="view">
          <input
            name="task"
            className="toggle"
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => toggleTaskCompleted(task.id)}
          />
          <label htmlFor="task">
            <span className="description">{task.text}</span>
            <span className="created">
              created
              {formatDistanceToNow(task.date)}
              ago
            </span>
          </label>
          <button type="button" className="icon icon-edit" onClick={this.onClickEdit} aria-label="Edit" />
          <button type="button" className="icon icon-destroy" onClick={() => deleteTask(task.id)} aria-label="Delete" />
        </div>
        <input
          type="text"
          className="edit"
          ref={this.editFieldRef}
          value={editiValue}
          onChange={this.onChangeEditiValue}
          onBlur={this.onBlurEditField}
        />
      </>
    );
  }
}

export default Task;
