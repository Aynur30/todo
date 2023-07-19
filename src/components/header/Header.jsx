import React from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from '../NewTaskForm/NewTaskForm';
import '../TodoApp/TodoApp.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.addTask = props.addTask;
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={this.addTask} />
      </header>
    );
  }
}

Header.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Header;
