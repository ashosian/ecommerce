import React from 'react'
import { useNavigate, useParams } from 'react-router';
import { useGetItemBySearchQuery, useItemByPageQuery } from '../features/product/productApi';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating
} from "@material-tailwind/react";
import { baseUrl } from "../features/constant";

import { Image, Shimmer } from 'react-shimmer'

const SearchPage = () => {
  const { page } = useParams();
  const { data, isLoading, isError, error } = useItemByPageQuery(
    page);

  const nav = useNavigate();

  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <dotlottie-player src="https://lottie.host/29061f9b-bee7-4e7e-8ee2-6cf4511fc2ce/Ru41Z8Q9vh.json" background="#fff" speed="1" loop autoplay></dotlottie-player>

    </div>
  }


  return (
    <div className=''>
      <div className='grid grid-cols-4 gap-4 items-start p-10  lg:grid-cols-2'>
        {data && data.product.map((product) => {
          return <Card key={product._id} className="mt-6 w-full cursor-pointer  transition-all delay-75 shadow-lg hover:scale-90 hover:shadow-2xl" onClick={() => nav(`/product/detail/${product._id}`)}>
            <CardHeader color="blue-gray" className="relative h-40 ">
              <img
                className="h-full w-[100vh] object-fill"
                src={`${baseUrl}${product.product_image}`}
                fallback={<Shimmer width={800} height={600} />}
              />

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {product.product_name}
              </Typography>
              <Typography>
                {product.product_detail}
              </Typography>
              {product.numReviews > 0 && <div>
                <div className="flex justify-between">
                  <Rating value={product.rating} readonly />
                  <h1> Reviews {product.numReviews}</h1>
                </div>

              </div>
              }
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        })}

      </div>
      <div className='flex space-x-5 justify-center p-10'>
        <button onClick={() => nav(-1)} >PREV</button>
        <h1 className='text-black'>{data.page}</h1>
        <button disabled={data?.page == 2 ? true : false} onClick={() => nav(`/searchpage/${data.page + 1}`)} >Next</button>
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

export default SearchPage
