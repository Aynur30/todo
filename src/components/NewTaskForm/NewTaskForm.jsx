import React from 'react';
import './NewTaskForm.css';

class NewTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  onChangeValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onSubmit = (e) => {
    const { value } = this.state;
    const { addTask } = this.props;
    e.preventDefault();
    if(value.trim() === '')return;
    addTask(value);
    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" value={value} onChange={this.onChangeValue} />
      </form>
    );
  }
}

export default NewTaskForm;
