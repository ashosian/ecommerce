import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetItemBySearchQuery } from '../features/product/productApi';

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

const Search = () => {
  const { search } = useParams();
  const { isLoading, isError, data, error } = useGetItemBySearchQuery(search);
  console.log(data);
  const nav = useNavigate();

  if (isLoading) {
    return <h1>loading</h1>
  }
  console.log(search);
  console.log(data);
  return (
    <div className='grid grid-cols-4 gap-4 items-start p-5'>
      {data && data.product.map((product) => {
        return <Card key={product._id} className="mt-6 w-full cursor-pointer  transition-all delay-75 shadow-lg hover:scale-90 hover:shadow-2xl" onClick={() => nav(`/product/detail/${product._id}`)}>
          <CardHeader color="blue-gray" className="relative h-56 ">
            <Image
              src={`${baseUrl}${product.product_image}`}
              fallback={<Shimmer width={800} height={600} className="w-full h-full" />}
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
  )
}

export default Search
