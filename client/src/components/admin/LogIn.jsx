import React, { useState } from 'react'

const LogIn = () => {

const[email,setEmail] =useState('')
const[password,setPassword] = useState('')

    const handleSubmit = async (e) =>{
e.preventDefault()
    }
  return (
    <div className='flex items-center justify-center h-screen'>
<div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
    <div className='flex flex-col items-center justify-center'>
<div className='w-full py-6 text-center'>
<h1 className='text-3xl font-bold'><span className='text-primary'>Admin</span>Login</h1>
<p className='font-light'>Enter your credentials to access the admin panel</p>
</div>
<div>
    <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-700'>
<div className='flex flex-col mb-4 w-full'>
  <label className='mb-1 text-sm text-gray-600'>Email</label>
  <input onChange={e=> setEmail(e.target.value)} value={email}
    type='email'
    required
    placeholder='Enter email id'
    className='border-b-2 border-gray-300 p-2 outline-none'
  />
</div>

<div className='flex flex-col mb-6 w-full'>
  <label className='mb-1 text-sm text-gray-600'>Password</label>
  <input onChange={e=> setPassword(e.target.value)} value={password}
    type='password'
    required
    placeholder='Enter password'
    className='border-b-2 border-gray-300 p-2 outline-none'
  />
</div>


    </form>
</div>

    </div>
</div>

    </div>
  )
}

export default LogIn