import React from 'react'

const Nav = ({userLoginData}) => {
  return (
    <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-medium'>Hello, <br/> <span className='text-3xl font-semibold'>{userLoginData.firstName} 👋</span></h1>
        <button className='bg-red-500 px-5 py-2 rounded-md text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Nav