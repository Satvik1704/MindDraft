import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';

const ListBlog = () => {

const[blogs,setBlogs] = useState([]);

const fetchBlogs = async () =>{
    setBlogs(blog_data)
}

useEffect(() =>{
    fetchBlogs()
},[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
    <h1>All blogs</h1>
    <div className='relative h-4/5 mt-4 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
         <table className='w-full text-sm text-gray-500'>
                <thead>
                    <tr className='bg-gray-100 text-gray-700 text-left uppercase text-xs'>
                        <th scope='col' className='px-6 py-3'>#</th>
                        <th scope='col' className='px-6 py-3'>Blog Title</th>
                        <th scope='col' className='px-6 py-3 max-sm:hidden'>Date</th>
                        <th scope='col' className='px-6 py-3 max-sm:hidden'>Status</th>
                        <th scope='col' className='px-6 py-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) => (
                     <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1} />
                    ))}
                </tbody>
            </table>
    </div>


    </div>
  )
}

export default ListBlog