// import React from 'react'

const TaskSearch = ({searchTerm,setSearchTerm}) => {
  return (
    <div className="m-4">
      <input className="p-2 rounded rounded-lg" type="text" placeholder="Search Task" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
    </div>
  )
}

export default TaskSearch
