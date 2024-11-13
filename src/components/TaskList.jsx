// import React from 'react'

import TaskItem from "./TaskItem"

const TaskList = () => {
  return (
    <ul>
        {TaskList.map(()=>(
            <TaskItem/>
        ))}
      
    </ul>
  )
}

export default TaskList
