import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { FaEye } from 'react-icons/fa'


const Writer = () => {
  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Writers</h2>
        <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white 
        hover:bg-purple-600' to='/dashboard/writer/add'>Add Writers</Link>
      </div>
      <div className='relative overflow-x-auto p-4'>
          <table className='w-full text-sm text-left text-slate-600'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-7 py-3'>No</th>
              <th className='px-7 py-3'>Name</th>
              <th className='px-7 py-3'>Category</th>
              <th className='px-7 py-3'>Role</th>
              <th className='px-7 py-3'>Image</th>
              <th className='px-7 py-3'>Email</th>
              <th className='px-7 py-3'>Active</th>
            </tr>
            </thead>
            <tbody>
              {
                [1, 2, 3, 4, 5, 6, 7].map((n, i) => <tr key={i} className='bg-white border-b' >
                  <td className='px-6 py-4'>{i + 1}</td>
                  <td className='px-6 py-4'>Md. Jihad</td>
                  <td className='px-6 py-4'>Sports</td>
                  <td className='px-6 py-4'>Writer</td>
                  <td className='px-6 py-4'>
                    <img className='w-[40px] h-[40px]' src='https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.webp?b=1&s=170667a&w=0&k=20&c=Raufg0A7TNVjLe-92r5zXJxsH8oyDZjGENR34jliB4Y=' alt="" />
                  </td>
                  <td className='px-6 py-4'>mdjihad.ewu@gmail.com</td>
                  <td className='px-6 py-4'>
                    <div className='flex justify-start items-center gap-x-4 text-white'>
                      <Link className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'><FaEye /></Link>
                    </div>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Writer