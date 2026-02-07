import React from 'react'
import Nav from '../nav/nav'
import CreateTask from '../CreateTask/CreateTask'
import AllTask from '../AllTask/AllTask'

const AdminDashboard = ({userLoginData}) => {
  console.log(userLoginData)
  return (
    <div className='h-screen w-full p-10'>
        <Nav userLoginData={userLoginData}></Nav>
        <CreateTask userLoginData={userLoginData}></CreateTask>
        <AllTask userLoginData={userLoginData}></AllTask>
    </div>
  )
}

export default AdminDashboard