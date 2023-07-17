import React from 'react';

import Footer from '../Footer/Footer';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskList from '../TaskList/TaskList';
import './TodoApp.css';

let nextId = 4;

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'All',
      tasks: [
        {
          id: 1,
          text: 'Completed task',
          date: new Date(),
          isCompleted: true,
          editMode: false,
        },
        {
          id: 2,
          text: 'Editing task',
          date: new Date(),
          isCompleted: false,
          editMode: false,
        },
        {
          id: 3,
          text: 'Active task',
          date: new Date(1999),
          isCompleted: false,
          editMode: false,
        },
      ],
    };
  }

  setFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  addTask = (text) => {
    this.setState(({ tasks }) => ({
      tasks: [
        ...tasks,
        {
          id: nextId++,
          text,
          date: new Date(),
          isCompleted: false,
          editMode: false,
        },
      ],
    }));
  };

  changeTaskField = (id, field, value) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            [field]: value || !task[field],
          };
        }
        return { ...task };
      }),
    }));
  };

  changeTaskText = (id, text) => {
    this.changeTaskField(id, 'text', text);
  };

  toggleTaskCompleted = (id) => {
    this.changeTaskField(id, 'isCompleted');
  };

  toggleTaskEditMode = (id) => {
    this.changeTaskField(id, 'editMode');
  };

  deleteTask = (id) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => task.id !== id),
    }));
  };

  deleteTasksCompleted = () => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => !task.isCompleted),
    }));
  };

  render() {
    const { tasks, filter } = this.state;
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addTask={this.addTask} />
        </header>
        <section className="main">
          <TaskList
            tasks={tasks}
            toggleTaskCompleted={this.toggleTaskCompleted}
            toggleTaskEditMode={this.toggleTaskEditMode}
            changeTaskText={this.changeTaskText}
            deleteTask={this.deleteTask}
            filter={filter}
          />
          <Footer
            setFilter={this.setFilter}
            filter={filter}
            deleteTasksCompleted={this.deleteTasksCompleted}
            tasks={tasks}
          />
        </section>
      </section>
    );
  }
}

export default TodoApp;
