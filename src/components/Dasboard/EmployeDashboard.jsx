import React from 'react'
import Nav from '../nav/nav'
import TaskListNumber from '../TaskListNumber/TaskListNumber'
import TaskList from '../TaskList/TaskList'

export const EmployeDashboard = ({userLoginData}) => {
  // console.log(userLoginData)
  return (
    <div className='p-8 bg-[#1c1c1c] h-screen'>
<Nav userLoginData={userLoginData}></Nav>
<TaskListNumber userLoginData={userLoginData}></TaskListNumber>
<TaskList userLoginData={userLoginData}></TaskList>
    </div>
  )
}
