import React, { useState } from "react";
import { Checkbox, Typography } from "@mui/material";
import { FaCar, FaUsers } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import { FilterPanelProps } from "@/commons/interface";
import RangeSlider from "../RangeSlider";

const FilterPanel = ({ cars }: FilterPanelProps) => {
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(200);

  const types = cars? [...new Set(cars.map((car) => car.type))] : []
  const capacities = cars? [...new Set(cars.map((car) => car.capacity))]: []

  const toggleSelection = (value: string, setState: React.Dispatch<React.SetStateAction<string[]>>, state: string[]) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  return (
    <div className="w-64 p-4 bg-gray-50 rounded shadow-md">
      <Typography variant="h6" className="mb-4 text-gray-800">
        <FaCar className="inline mr-2" /> Type
      </Typography>
      {types?.map((type) => (
        <label key={type} className="flex items-center mb-2">
          <Checkbox
            checked={selectedType.includes(type)}
            onChange={() => toggleSelection(type, setSelectedType, selectedType)}
            color="primary"
          />
          <span className="capitalize text-gray-700">
            {type} ({cars.filter((car) => car.type === type).length})
          </span>
        </label>
      ))}

      <Typography variant="h6" className="mt-6 mb-4 text-gray-800">
        <FaUsers className="inline mr-2" /> Capacity
      </Typography>
      {capacities?.map((capacity) => (
        <label key={capacity} className="flex items-center mb-2">
          <Checkbox
            checked={selectedCapacity.includes(capacity)}
            onChange={() => toggleSelection(capacity, setSelectedCapacity, selectedCapacity)}
            color="primary"
          />
          <span className="text-gray-700">
            {capacity} ({cars.filter((car) => car.capacity === capacity).length})
          </span>
        </label>
      ))}

      <Typography variant="h6" className="mt-6 mb-4 text-gray-800">
        Price
      </Typography>
      <RangeSlider
        value={maxPrice}
        onChange={(e: any, value: number) => setMaxPrice(value as number)}
        aria-labelledby="price-slider"
        min={0}
        max={200}
        valueLabelDisplay="auto"
        className="text-blue-500"
      />
      <Typography className="text-gray-700 mt-2">Max. ${maxPrice}.00</Typography>
    </div>
  );
};

export default FilterPanel
