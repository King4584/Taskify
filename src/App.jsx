import { useEffect, useState } from 'react'
import './App.css'
// import { title } from 'framer-motion/client';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskSearch from './components/TaskSearch';

const App = () => {
  const [tasks,setTasks]= useState([]);
  const [ searchTerm,setSearchTerm]=useState('');

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

  const deleteTask = (id) =>{
    setTasks(
      tasks.map(task => task.id===id ? {...task,completed:!task.completed} : task)
    );
  };

  const filteredTask = tasks.filter(task => 
    task.title.tolowerCase().include(searchTerm.tolowerCase())
  );

  const toggleCompletion = (id) =>{
    setTasks(
      tasks.map((task)=> task.id ? {...task,completed: !task.completed}:task)
    );
  }

  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Taskify - Simplify Your Day, Amplify Your Productivity
      </h1>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-4">
        <TaskInput addTask={addTask} />
        <TaskSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TaskList tasks={filteredTask} deleteTask={deleteTask} toggleCompletion={toggleCompletion} />
      </div>
    </div>
    </>
  )
}

export default App



