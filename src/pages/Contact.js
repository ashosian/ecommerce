import React from 'react'

const Contact = () => {
  return (
    <div className='bg-blue-gray-300 h-[80vh] grid grid-cols-3 md:grid-cols-1'>
      <div></div>
      <div className='space-y-5 flex flex-col items-center'>

        <p className='text-center font-bold text-white'>Contact</p>
        <p className='text-center text-white'>Email: thedatadb@gmail.com
        </p>
        <p className='text-white'>Our Logo :</p>

        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/145/102/small/fresh-fruit-logo-free-vector.jpg" alt="" />
      </div>
      <div></div>
    </div>
  )
}

export default Contact
