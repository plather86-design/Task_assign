import React from 'react'

const NewTask = () => {
  return (
     <div className='shrink-0 h-full w-84 p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h2 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h2>
                <h3 className='text-sm '>2 Feb 2024</h3>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>
                Make a React App
            </h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa delectus voluptates tempore ducimus, odit, unde porro perspiciatis quam, veniam blanditiis inventore omnis adipisci quidem quod ex minima ipsum obcaecati vel.
            </p>
            <div className='flex justify-around mt-10'>
                <button className='border bg-blue-600 py-2 px-4 rounded-xl cursor-pointer'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask