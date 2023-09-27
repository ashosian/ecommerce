import React from 'react'

const About = () => {
  return (
    // <div style={{ backgroundImage: `url('	https://media.istockphoto.com/id/1433085046/photo/closeup-of-a-woman-drinking-a-glass-of-water-for-hydration-thirst-and-health-at-her-house.webp?s=1024x1024&w=is&k=20&c=BWBQqAsO3Krcgtc2-GxZnVE7ddos1OGv3grMvK5hQB4=')`, backgroundSize: "contain" }} className="container w-[100vw] mx-auto" >

    //   <h1>about</h1>
    // </div>

    <div className='bg-blue-gray-300 h-[80vh] grid grid-cols-3 md:grid-cols-1'>
      <div></div>
      <div className='space-y-5 flex flex-col items-center'>

        <p className='text-center font-bold text-white'>About Us</p>
        <p className='text-center text-white'>Thefruits ecommerce was built in 2016 to provide a fresh and quality fruits through online in the hope that we could satisfy the customers and make them easy to get products in the less time as much as possible.
        </p>

        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/145/102/small/fresh-fruit-logo-free-vector.jpg" alt="" />
      </div>
      <div></div>
    </div>
  )
}

export default About
