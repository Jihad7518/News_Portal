import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'


const AddWriter = () => {
  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Add Writer</h2>
        <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white 
        hover:bg-purple-600' to='/dashboard/writers'>Writers</Link>
      </div>
      <div className='p-4'>
        <form>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor="name">Name</label>
              <input type='text' placeholder='name' name='name' className='px-3 py-2 rounded-md 
                  outline-0 border border-gray-300 focus:border-green-500 h-10' id='name'/>
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor="category">Name</label>
              <select name='category' id='category' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' >
                <option value="">---Select Category---</option>
                <option value="Education">Education</option>
                <option value="Travel">Politics</option>
                <option value="Health">Health</option>
                <option value="International">International</option>
                <option value="Sports">Sports</option>
                <option value="Technology">Technology</option>
              </select>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor="email">Email</label>
              <input type='text' placeholder='email' name='email' className='px-3 py-2 rounded-md 
                  outline-0 border border-gray-300 focus:border-green-500 h-10' id='name'/>
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor="password">Password</label>
              <input type='text' placeholder='password' name='password' className='px-3 py-2 rounded-md 
                  outline-0 border border-gray-300 focus:border-green-500 h-10' id='password'/>
            </div>
          </div>
          <div className='mt-4'>
          <button className='px-3 py-[6px] bg-blue-600 rounded-sm text-white 
               hover:bg-blue-900'>Add Writer</button>
          </div>
        </form>
      </div>
    </div> 
  )
}

export default AddWriter