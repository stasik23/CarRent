import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { Button, Rating, Typography } from "@mui/material";
import "tailwindcss/tailwind.css";

export const FeatureCard = ({car}: {car: any}) => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <Typography variant="h6" className="text-blue-700">
              Sports car with the best design and acceleration
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Safety and comfort while driving a futuristic and elegant sports car
            </Typography>
          </div>
          <img
            src={car.image}
            alt={car.name}
            className="w-full rounded-lg mb-4"
          />
          <div className="flex gap-2">
            {[1, 2, 3].map((_, idx) => (
              <img
                key={idx}
                src={car.image}
                alt={`thumbnail ${idx}`}
                className="w-16 h-16 object-cover rounded-md cursor-pointer border border-gray-300 hover:border-blue-500"
              />
            ))}
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex justify-between items-start mb-4">
            <div>
              <Typography variant="h5" className="text-gray-800 font-semibold">
                {car.brand} {car.name}
              </Typography>
              <Rating name="read-only" value={4.5} readOnly size="small" />
              <Typography variant="caption" className="text-gray-500">
                640+ Reviews
              </Typography>
            </div>
            <AiFillHeart className="text-red-500 text-2xl cursor-pointer" />
          </div>
          <Typography variant="body2" className="text-gray-600 mb-4">
            {car.description}
          </Typography>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <Typography variant="subtitle2" className="text-gray-500">
                Type
              </Typography>
              <Typography>{car.type}</Typography>
            </div>
            <div>
              <Typography variant="subtitle2" className="text-gray-500">
                Capacity
              </Typography>
              <Typography>{car.capacity}</Typography>
            </div>
            <div>
              <Typography variant="subtitle2" className="text-gray-500">
                Fuel
              </Typography>
              <Typography>{car.fuel}</Typography>
            </div>
            <div>
              <Typography variant="subtitle2" className="text-gray-500">
                Steering
              </Typography>
              <Typography>{car.transmission}</Typography>
            </div>
            <div>
              <Typography variant="subtitle2" className="text-gray-500">
                Tank Capacity
              </Typography>
              <Typography>{car.tankCapacity}</Typography>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h6" className="text-gray-800">
              ${car.rentalPrice.price}.00 / days
            </Typography>
            <Button variant="contained" color="primary">
              Rent Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
