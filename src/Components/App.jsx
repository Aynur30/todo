import React, { useState, useEffect, useCallback, useMemo } from 'react';

import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer';
import Context from './Сontext';
import { v4 as uuidv4 } from 'uuid';


const App = () => {
  const [data, setData] = useState([]);
  const [currentFilter, setcurrentFilter] = useState('All');
  let data = [];

  const tck = useCallback(() => {
    setData((prevData) =>
      prevData.map((el) => 
        el.state !== 'completed'&&el.going && el.prop === "down" ? { ...el, time: el.time - 1 } : 
        el.state !== 'completed'&&el.going && el.prop === "up" ? { ...el, time: el.time + 1 }:{...el}
      
      )
    );
  }, []);



  
  useEffect(() => {
    const timerID = setInterval(() => tck(), 1000);
    return () => clearInterval(timerID);
  }, [tck]);

  const addTask = (text, time) =>
    setData((prevData) => [
      ...prevData,
      {
        text,
        state: '',
        created: new Date(),
        id: uuidv4(),
        time,
        going: false,
        prop: time === 0 ? 'up': 'down',
      },
    ]);


  const displayData = () => {
    switch (currentFilter) {
      case 'All':
        return data;
      case 'Active':
        return data.filter((element) => element.state === '');
      case 'Completed':
        return data.filter((element) => element.state === 'completed');
      default:
        return data;
    }
  };



  const editData = (value)=>{
    setData((prevData) => [
      ...prevData,
      value
    ]);
  }


  const tasksLeft = () =>
    data.reduce((count, el) => (!el.state ? ++count : count), 0);


  const clearCompletedTasks = () =>
    setData((prevData) =>
      prevData.filter((element) => element.state !== 'completed')
    );

  const switchTaskState = (id) =>
    setData((prevData) =>
      prevData.map((el) =>
        el.id === id ? { ...el, state: el.state ? '' : 'completed' } : { ...el }
      )
    );


  const switchTaskTimer = (id, state) =>
    setData((prevData) =>
      prevData.map((el) => (el.id === id ? { ...el, going: state } : { ...el }))
    );


  const deleteTask = (id) =>
    setData((prevData) => prevData.filter((el) => el.id !== id));


  const toggleTasksFilter = (filter) => setcurrentFilter(filter);

  const taskControls = useMemo(() => {
    return {
      switchTaskState,
      switchTaskTimer,
      deleteTask,
    };
  }, []);



  const filterControls = useMemo(() => {
    return { toggleTasksFilter, currentFilter };
  }, [currentFilter]);

  return (
    <Context.Provider value={data}>
    <section className="todoapp">
      <NewTaskForm />
      <NewTaskForm editData={editData} addTask={addTask} />
      <section className="main">
          <TaskList />
          <Footer
            tasksLeft={tasksLeft()}
            clearCompletedTasks={clearCompletedTasks}
          />
      </section>
    </section>
    </Context.Provider>
  );
};

export default App;
