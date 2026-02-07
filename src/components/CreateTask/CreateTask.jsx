import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form className='flex flex-wrap w-full items-start justify-baseline'>
                <div className='w-1/2'>
                   <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Tast Title</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Make a React App'/>     
                </div>  
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="date"  />    
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assigno To</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Employee Name' />
                </div>
                <div>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />   
                </div>
                </div>
               
                <div className='w-1/2 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Decription</h3>
                <textarea className='text-sm w-full h-44  py-2 px-4 rounded outline-none bg-transparent border border-gray-400' name="" id=""></textarea>  
                <button className='w-full mt-4 text-sm rounded px-5 hover:bg-emerald-600 py-3 bg-emerald-500 cursor-pointer'>Create Task</button>
                </div>
                 
            </form>
        </div>
  )
}

export default CreateTask