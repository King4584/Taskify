import React, { useState } from 'react'

const TaskInput = ({addTask}) => {
  const [taskTitle,setTaskTitle] = useState('');

  const handleAddTask=()=>{
    if(taskTitle.trim()){
        addTask(taskTitle);
        setTaskTitle('');
    }
  };
  
    return (
    <div>
      <input className='p-3 rounded-lg' type='text' value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)} placeholder='Enter a new Task'/>
      <button onClick={handleAddTask} className='p-2 border bg-blue-600 mx-4'> Add Task </button>
    </div>
  )
}

export default TaskInput
