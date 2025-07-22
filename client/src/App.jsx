/* eslint-disable no-constant-condition */
import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import Blog from './pages/Blog'
import Home from './pages/Home'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import LogIn from './components/admin/LogIn'



export default function App() {
  return (
    <div>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/blog/:id' element={<Blog/>}></Route>
<Route path='/admin' element={true ? <Layout/> : <LogIn/>}>
<Route index element={<Dashboard/>}/>
<Route path ='addBlog' element={<AddBlog/>}/>
<Route path ='listBlog' element={<ListBlog/>}/>
<Route path ='comments' element={<Comments/>}/>
</Route>

</Routes>

    </div>
  )
}

