import React from 'react';

import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer';
import { v4 as uuidv4 } from 'uuid';


export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.toggleState = this.toggleState.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.leftTask = this.leftTasks.bind(this);
    this.addTask = this.addTask.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.decreaseTime = this.decreaseTime.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
  }


  componentDidMount() {
    this.timerID = setInterval(() => this.decreaseTime(), 1000);
  }


  decreaseTime() {
    this.setState(({ data }) => {
      const arr = data.map((el) =>
        el.state !== 'completed'&&el.going && el.mode === "drop" ? { ...el, time: el.time - 1 } : 
        el.state !== 'completed'&&el.going && el.mode === "raise" ? { ...el, time: el.time + 1 }:{...el}
      );
      return {
        data: arr,
      };
    });
  }



  toggleTimer(id, state) {
    this.setState(({ data }) => {
      const arr = data.map((el) =>
        el.id === id ? { ...el, going: state } : { ...el }
      );
      return {
        data: arr,
      };
    });
  }
  //

  clearCompleted() {
    this.setState(({ data }) => {
      const arr = data.filter((element) => element.state !== 'completed');
      return {
        data: arr,
      };
    });
  }

  toggleState(id) {
    this.setState(({ data }) => {
      const arr = data.map((el) =>
        el.id === id ? { ...el, state: el.state ? '' : 'completed' } : { ...el }
      );
      return {
        data: arr,
      };
    });
  }

  deleteTask(id) {
    this.setState(({ data }) => {
      const arr = data.filter((el) => el.id !== id);
      return {
        data: arr,
      };
    });
  }

  leftTasks(data) {
    return data.reduce((count, el) => {
      if (!el.state) ++count;
      return count;
    }, 0);
  }

  addTask(text, time) {
    this.setState(({ data }) => {
      return {
        data: [
          ...data,
          {
            text,
            state: '',
            created: new Date(),
            id: uuidv4(),
            time,
            going: false,
            mode: time === 0 ? 'raise':'drop',
          },
        ],
      };
    });
  }

  toggleFilter(filter) {
    this.setState({ filter });
  }

  render() {
    return (
        <>
            <NewTaskForm handleSubmit={this.addTask} />
            <section className="main">
            <TaskList
                data={(() => {
                switch (this.state.filter) {
                    case 'All':
                    return this.state.data;
                    case 'Active':
                    return this.state.data.filter(
                        (element) => element.state === ''
                    );
                    case 'Completed':
                    return this.state.data.filter(
                        (element) => element.state === 'completed'
                    );
                    default:
                    return this.state.data;
                }
                })()}
                onSwitchState={this.toggleState}
                onDelete={this.deleteTask}
                onToggleTimer={this.toggleTimer}
                decreaseTime={this.decreaseTime}
            />
            <Footer
                taskLeft={this.leftTasks(this.state.data)}
                filter={this.state.filter}
                onToggleFilter={this.toggleFilter}
                onClearCompleted={this.clearCompleted}
            />
            </section>
        </>
    
    );
  }
}