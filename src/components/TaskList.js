import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks,showIncomplete,setTaskStatus,removeTask,setShowIncomplete}) {
  return (
    <>
    <ul className="task-list">
        {tasks
          .filter((task) => (showIncomplete ? task.status !== 1 : true))
          .map((task) => (
            <TaskItem task ={task}
            setTaskStatus ={setTaskStatus}
            removeTask = {removeTask}/>
          ))}
      </ul>
       <div className="filter-wrapper">
       <lable htmlFor="filter" className="filter-lable">
         Show incompleted task only
       </lable>
       <input
         type="checkbox"
         id="filter"
         checked={showIncomplete}
         onChange={(e) => setShowIncomplete(e.target.checked)}
       />
     </div>
     </>
  )
}

export default TaskList