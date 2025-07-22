/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { dashboard_data } from '../../assets/assets'
import { assets } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem';

const Dashboard = () => {

    // eslint-disable-next-line no-unused-vars
    const[dashboard, setDashboard] = useState({
        blogs:0,
        comments:0,
        drafts:0,
        recentBlogs:[]

    })
 const fetchDashboard = async () =>{
            setDashboard(dashboard_data)
        };

useEffect(() =>{
    fetchDashboard();
},[])


  return (
   
<div className='flex-1 p-4 bg-[#F8F9F9]'>
    <div className='flex items-center justify-between gap-4 flex-wrap'>
        <div className='flex items-center gap-4 p-4 bg-white rounded-md shadow-md flex-1 min-w-[250px]'>
            <img src={assets.dashboard_icon_1} alt="" className='w-12' />
            <div>
                <p className='text-gray-500 font-light'>Total Blogs</p>
                <p className='text-2xl font-bold text-gray-800'>{dashboard.blogs}</p>
            </div>
        </div>
        <div className='flex items-center gap-4 p-4 bg-white rounded-md shadow-md flex-1 min-w-[250px]'>
            <img src={assets.dashboard_icon_2} alt="" className='w-12' />
            <div>
                <p className='text-gray-500 font-light'>Total Comments</p>
                <p className='text-2xl font-bold text-gray-800'>{dashboard.comments}</p>
            </div>
        </div>
        <div className='flex items-center gap-4 p-4 bg-white rounded-md shadow-md flex-1 min-w-[250px]'>
            <img src={assets.dashboard_icon_3} alt="" className='w-12' />
            <div>
                <p className='text-gray-500 font-light'>Total Drafts</p>
                <p className='text-2xl font-bold text-gray-800'>{dashboard.drafts}</p>
            </div>
        </div>
    </div>
    {/* ... rest of the dashboard content ... */}
<div className='mt-8'>
   
<div className='flex items-center gap-2 text-gray-700 font-semibold mb-4'>
            <img src={assets.dashboard_icon_4} alt="" className='w-6' />
            <p>Latest Blogs</p>
        </div>
        <div className='bg-white rounded-md shadow-md overflow-x-auto'>
            <table className='w-full text-sm text-gray-500'>
                <thead className='text-xs text-gray-600 text-left uppercase'>
                    <tr className='bg-gray-100 text-gray-700 text-left uppercase text-xs'>
                        <th scope='col' className='px-6 py-3'>#</th>
                        <th scope='col' className='px-6 py-3'>Blog Title</th>
                        <th scope='col' className='px-6 py-3 max-sm:hidden'>Date</th>
                        <th scope='col' className='px-6 py-3 max-sm:hidden'>Status</th>
                        <th scope='col' className='px-6 py-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dashboard.recentBlogs.map((blog, index) => (
                        <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index + 1} />
                    ))}
                </tbody>
            </table>
        </div>


</div>

</div>


    
  )
}

export default Dashboard