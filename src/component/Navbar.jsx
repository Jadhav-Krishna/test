/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-50 h-20 w-full -mt-1 flex items-center'>  
        <div id="left" className='w-2/5 p-5 bg-zinc-950'><h1 className='text-center bg-zinc-950 text-3xl text-white font-semibold'>PROTOFILO</h1></div>
        <div id="right" className='w-3/5 flex flex-row gap-20 text-center items-center p-6 text-xl font-semibold bg-zinc-700'>
            <a className='ml-64' href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">WORKS</a>
            <a href="#">BLOG</a>
            <a href="#">CONTACT</a>
        </div>
    </div>
  )
}

export default Navbar