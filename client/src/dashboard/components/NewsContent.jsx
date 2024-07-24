import React from 'react'
import {Link} from 'react-router-dom'
import {FaEye, FaEdit, FaTrash} from 'react-icons/fa'

const NewsContent = () => {
  return (
    <div>
        <div className='px-4 py-3 flex gap-x-3'>
            <select name='' className='px-3 py-2 rounded-md 
        outline-0 border border-gray-300 focus:border-green-500 h-10' id=''>
            <option value="">-----Seletc Type-----</option>
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="deactive">Deactive</option>
        </select>
        <input type='text' placeholder='Search News' className='px-3 py-2 rounded-md 
        outline-0 border border-gray-300 focus:border-green-500 h-10'/>
        </div>
        <div className='relative overflow-x-auto p-4'>
            <table className='w-full text-sm text-left text-slate-600'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr>
                        <th className='px-6 py-3'>No</th>
                        <th className='px-6 py-3'>Title</th>
                        <th className='px-6 py-3'>Image</th>
                        <th className='px-6 py-3'>Category</th>
                        <th className='px-6 py-3'>Description</th>
                        <th className='px-6 py-3'>Date</th>
                        <th className='px-6 py-3'>Status</th>
                        <th className='px-6 py-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-white border-b'>
                        <td className='px-6 py-4'>1</td>
                        <td className='px-6 py-4'>India gets its longest glass b....</td>
                        <td className='px-6 py-4'><img className='w-[40px] h-[40px]' src='https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.webp?b=1&s=170667a&w=0&k=20&c=Raufg0A7TNVjLe-92r5zXJxsH8oyDZjGENR34jliB4Y='></img></td>
                        <td className='px-6 py-4'>Travel</td>
                        <td className='px-6 py-4'>You all have wa........</td>
                        <td className='px-6 py-4'>October 10, 2023</td>
                        <td className='px-6 py-4'><span className='px-2 py-[2px] bg-green-100 text-green-800
                         rounded-lg text-xs cursor-pointer'>Active</span></td>
                        <td className='px-6 py-4'>
                            <div className='flex justify-start items-center gap-x-4 text-white'>
                                <Link className='p-6[px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'><FaEye/></Link>
                                <Link className='p-6[px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50'><FaEdit/></Link>
                                <div className='p-6[px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'><FaTrash/></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default NewsContent