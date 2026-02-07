import React from 'react'

const TaskListNumber = ({userLoginData}) => {
  return (
    <div className='flex mt-8 justify-between gap-3'>
        <div className=' w-[45%] py-6 px-9 bg-blue-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{userLoginData.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Tasks</h3>
        </div>
        <div className=' w-[45%] py-6 px-9 bg-green-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{userLoginData.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>
        <div className=' w-[45%] py-6 px-9 bg-yellow-300 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{userLoginData.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Accepted</h3>
        </div>
        <div className=' w-[45%] py-6 px-9 bg-red-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{userLoginData.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed</h3>
        </div>
        </div>
  )
}

export default TaskListNumber