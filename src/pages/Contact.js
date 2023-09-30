import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router';
const Contact = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className='bg-blue-gray-300 h-[80vh] grid grid-cols-3 md:grid-cols-1'>
        <div></div>
        <div className='space-y-5 flex flex-col items-center'>

          <p className='text-center font-bold text-white'>Contact</p>
          <p className='text-center text-white'>Email: thedatadb@gmail.com
          </p>
          <p className='text-center text-white'>Contact No: 9805553698</p>
          <p className='text-white'>Our Logo :</p>

          <img src="https://static.vecteezy.com/system/resources/thumbnails/005/145/102/small/fresh-fruit-logo-free-vector.jpg" alt="" />
        </div>

      </div>
      <div>
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between bg-black px-5">
          <Typography color="blue-gray" className="font-normal text-white">
            &copy; 2023 Ecommerce
          </Typography>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
                onClick={() => nav('/about')}
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
                onClick={() => nav('/contact')}
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

export default Contact
