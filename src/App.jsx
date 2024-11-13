import { useEffect, useState } from 'react'
import './App.css'
// import { title } from 'framer-motion/client';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks,setTasks]= useState([]);

  useEffect(()=>{
    const savedTask=localStorage.getItem('tasks');
    if(savedTask){
      setTasks(JSON.parse(savedTask));
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks]);

  const addTask=(title)=>{
    setTasks([...tasks,{id:Date.now(),title,completed:false}]);
  };

  


  return (
    <>
      <div > 
        <h1 className='text-2xl m-6'>Taskify - Simplify Your Day, Amplify Your Productivity.</h1>
        <TaskInput addTask={addTask}/>
        <TaskList />
      </div>
    </>
  )
}

export default App



