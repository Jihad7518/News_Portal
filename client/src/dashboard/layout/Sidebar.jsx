import React from 'react'
import logo from '../../assets/logo.jpg';
import {Link, useLocation } from 'react-router-dom';
import { AiFillDashboard, AiOutlinePlus } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { BiNews } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";


const Sidebar = () => {

    const {pathname} = useLocation()
    return (
    <div className='w-[250px] h-screen fixed left-0 top-0 bg-white'>
        <div className='h-[70px] flex justify-center items-center'>
            <Link to='/'>
                <img src={logo} className='w-[250px] h-[200px]'/>
            </Link>
        </div>
        <ul className='px-3 flex flex-col gap-y-1 front-medium'>
            <li>
                <Link to="/dashboard/admin" className={`px-3 ${pathname === '/dashboard/admin' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start 
                   items-center hover:bg-indigo-500 hover:text-white`}>
                   <span className='text-xl'><AiFillDashboard/></span>
                   <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/dashboard/news" className={`px-3 ${pathname === '/dashboard/news' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} 
                   py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start 
                   items-center hover:bg-indigo-500 hover:text-white`}>
                   <span className='text-xl'><BiNews/></span>
                   <span>News</span>
                </Link>
            </li>
            <li>
                <Link to="/dashboard/writer/add" className={`px-3 ${pathname === '/dashboard/writer/add' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} 
                   py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start 
                   items-center hover:bg-indigo-500 hover:text-white`}>
                   <span className='text-xl'><AiOutlinePlus/></span>
                   <span>Add Writter</span>
                </Link>
            </li>
            <li>
                <Link to="/dashboard/writters" className={`px-3 ${pathname === '/dashboard/writters' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} 
                   py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start 
                   items-center hover:bg-indigo-500 hover:text-white`}>
                   <span className='text-xl'><FiUsers/></span>
                   <span>Writters</span>
                </Link>
            </li>
            <li>
                <Link to="/dashboard/profile" className={`px-3 ${pathname === '/dashboard/profile' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} 
                   py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start 
                   items-center hover:bg-indigo-500 hover:text-white`}>
                   <span className='text-xl'><ImProfile/></span>
                   <span>Profile</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}
export default Sidebar