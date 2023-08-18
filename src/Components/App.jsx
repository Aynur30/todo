import React, { useState, useEffect, useCallback, useMemo } from 'react';

import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer';
import Context from './Сontext';
import { v4 as uuidv4 } from 'uuid';


const App = () => {
  const [data, setData] = useState([]);
  const [currentFilter, setcurrentFilter] = useState('All');

  const tck = useCallback(() => {
    setData((prevData) =>
      prevData.map((el) => 
        //el.going && el.time && el.state !== 'completed' ? (el.prop === 'down' ? { ...el, time: el.time - 1 }: { ...el, time: el.time + 1 }) : { ...el }
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
    <section className="todoapp">
      <NewTaskForm editData={editData} addTask={addTask} />
      <section className="main">
        <Context.Provider value={taskControls}>
          <TaskList data={displayData()} />
        </Context.Provider>
        <Context.Provider value={filterControls}>
          <Footer
            tasksLeft={tasksLeft()}
            clearCompletedTasks={clearCompletedTasks}
          />
        </Context.Provider>
      </section>
    </section>
  );
};

export default App;
