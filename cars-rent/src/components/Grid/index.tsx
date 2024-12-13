import React from 'react';
import { cars } from '../../data.js'
import { FaCogs, FaGasPump, FaUsers } from 'react-icons/fa';
import { CarModel } from '../../commons/interface.js';
import Link from 'next/link.js';

export const Grid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24 p-4 mx-[62px]">
            {cars.map((car: CarModel) => (
                <div className="w-128 bg-white shadow-lg rounded-lg p-4" key={car.id}>
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-lg text-gray-800 font-semibold">{car.name}</h2>
                            <p className="text-sm text-gray-500">{car.type}</p>
                        </div>
                        <div className="text-red-500 text-xl">
                            <button>
                                <span role="img" aria-label="like">❤️</span>
                            </button>
                        </div>
                    </div>

                    <div className="mb-4">
                        <img
                            src={car.image}
                            alt={car.name}
                            className=" bg-cover h-auto flex justify-center rounded-lg"
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                            <FaGasPump />
                            <span>{car.tankCapacity}L</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaCogs />
                            <span>{car.transmission}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaUsers />
                            <span>{car.capacity} People</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="text-lg text-gray-800 font-bold">{car.rentalPrice.price} / day</p>
                        <Link href={`/payment/${car.id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                            Rent Now
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
