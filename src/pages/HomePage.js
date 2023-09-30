import React from 'react'
import { useGetAllProductsQuery } from '../features/product/productApi'
import CardUi from '../components/CardIUi';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router';



const HomePage = () => {
  const nav = useNavigate();
  const { data, isLoading, isError, error } = useGetAllProductsQuery();

  console.log(data)
  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      {/* <lottie-player src="https://lottie.host/01986b4b-7629-473a-8223-f06d23ec4120/LelU3WnIJp.json" background="#fff" speed="1" loop autoplay ></lottie-player> */}

      <dotlottie-player src="https://lottie.host/29061f9b-bee7-4e7e-8ee2-6cf4511fc2ce/Ru41Z8Q9vh.json" background="#fff" speed="1" loop autoplay></dotlottie-player>
    </div>
  }


  return (
    <div className=''>
      <Carousel className="rounded-none h-[40vh] overflow-hidden md:h-[60vh]">
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Welcome to Ecommerce
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is a best place to order a fresh fruits.
              </Typography>

            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Explore the sites
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Order any fruits and get it within 30min
              </Typography>

            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-3xl"
              >
                Order What You Want
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Satisfy your needs
              </Typography>

            </div>
          </div>
        </div>
      </Carousel>

      <div className='w-20vw'>
        <h1 className='text-center text-lg text-black font-extrabold p-5 underline'>All Categories of fruits</h1>
      </div>
      <div className='p-5 grid grid-cols-4  gap-4 items-start lg:grid-cols-2'>
        {data && data?.product.map((product) => {
          return <CardUi key={product._id} product={product} />
        })}

      </div>


      <div className='flex space-x-5 justify-center'>
        <button disabled={data?.page !== 1 ? true : false} onClick={() => nav(-1)} >PREV</button>
        <h1 className='text-black'>{data.page}</h1>
        <button onClick={() => nav(`/searchpage/${data.page + 1}`)} >Next</button>
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

export default HomePage
