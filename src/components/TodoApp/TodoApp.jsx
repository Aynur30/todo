import React from 'react';
import {nanoid}  from 'nanoid';

import Footer from '../Footer/Footer';
import Header from '../header/Header';
import TaskList from '../TaskList/TaskList';
import './TodoApp.css';


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
          id: nanoid(),
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
            [field]: value || (task.text === ''? task[field]:!task[field]),
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
        <Header addTask = {this.addTask}/>
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
