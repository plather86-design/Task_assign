import React from 'react'
import AcceptTast from './AcceptTast'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-3 flex-nowrap mt-10'>
            
        <AcceptTast></AcceptTast>
        <CompleteTask></CompleteTask>
        <FailedTask></FailedTask>
        <NewTask></NewTask>
    </div>
  )
}

export default TaskList