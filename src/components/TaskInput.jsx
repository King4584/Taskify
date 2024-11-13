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
      <input type='text' value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)} placeholder='Enter a new Task'/>
      <button onClick={handleAddTask}> Add Task </button>
    </div>
  )
}

export default TaskInput