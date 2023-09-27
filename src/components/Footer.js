import React from 'react'
import { Typography } from "@material-tailwind/react";
import { useNavigate } from 'react-router';
const Footer = () => {
  const nav = useNavigate();
  return (
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
  )
}

export default Footer
