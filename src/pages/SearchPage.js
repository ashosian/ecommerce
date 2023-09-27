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
      <lottie-player src="https://lottie.host/01986b4b-7629-473a-8223-f06d23ec4120/LelU3WnIJp.json" background="#fff" speed="1" loop autoplay ></lottie-player>
    </div>
  }

  console.log(data);
  return (
    <div className=''>
      <div className='grid grid-cols-4 gap-4 items-start p-10'>
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
        <button onClick={() => nav(`/searchpage/${data.page + 1}`)} >Next</button>
      </div>
    </div>
  )
}

export default SearchPage
