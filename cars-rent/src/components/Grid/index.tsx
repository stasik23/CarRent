import React from 'react';
import { cars } from '../../data.js'
import { FaCar } from 'react-icons/fa';
import { CarBrand } from '../../commons/interface.js';

export const Grid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {cars.map((car: CarBrand) => (
                <div className="bg-white shadow-md rounded-lg overflow-hidden" key={car.id}>
                    <img src={car.models[0].image} alt={car.models[0].name} className="w-full h-40 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">{car.brand}</h3>
                        {car.models.map(model => (
                            <div key={model.id} className="mt-2">
                                <p className="text-md">{model.name}</p>
                                <p className="text-sm text-gray-500">{model.type}</p>
                                <p className="text-lg font-bold">{model.rentalPrice.price} / day</p>
                                <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                    <FaCar className="inline mr-1" /> Rent Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
