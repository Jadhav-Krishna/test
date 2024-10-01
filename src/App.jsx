/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div className='h-screen w-full flex'>
      <Navbar/>
      <div id="left" className='w-2/5 bg-zinc-950'>
        <div className='absolute top-1/2 left-[30vw]'>
        <h2 className='text-5xl text-white'>MY NAME IS</h2>
        <h1 className='text-7xl font-semibold text-white'>KRISHNA</h1>
        <button  className='bg-yellow-500 text-3xl mt-5 font-bold px-3 py-2'>I AM A UI DEVELOPER</button>
        </div>
      </div>
      <div id="right" className='w-3/5 h-full'>
        <img className='h-full w-full object-cover' src="https://i.pinimg.com/564x/b6/0b/ae/b60bae0cf30043acdb398e3a3f2ac262.jpg" alt="" />
      </div>
    </div>
  )
}

export default App