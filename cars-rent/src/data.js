export const cars = [
    {
      id: 1,
      brand: "Toyota",
      models: [
        {
          id: 101,
          name: "Corolla",
          type: "sedan",
          capacity: "4 person",
          fuel: "gasoline",
          rentalPrice: { category: "economy", price: 50 },
          tankCapacity: "50 liters",
          image: "https://example.com/images/toyota_corolla.jpg"
        },
        {
          id: 102,
          name: "Camry",
          type: "sedan",
          capacity: "4 person",
          fuel: "gasoline",
          rentalPrice: { category: "standard", price: 70 },
          tankCapacity: "60 liters",
          image: "https://example.com/images/toyota_camry.jpg"
        },
        {
          id: 103,
          name: "RAV4",
          type: "suv",
          capacity: "6 person",
          fuel: "gasoline",
          rentalPrice: { category: "standard", price: 80 },
          tankCapacity: "55 liters",
          image: "https://example.com/images/toyota_rav4.jpg"
        },
        {
          id: 104,
          name: "Land Cruiser",
          type: "suv",
          capacity: "8 or more person",
          fuel: "gasoline",
          rentalPrice: { category: "luxury", price: 150 },
          tankCapacity: "93 liters",
          image: "https://example.com/images/toyota_land_cruiser.jpg"
        },
        {
          id: 105,
          name: "Prius",
          type: "hatchback",
          capacity: "4 person",
          fuel: "electric",
          rentalPrice: { category: "economy", price: 60 },
          tankCapacity: "8.8 kWh",
          image: "https://example.com/images/toyota_prius.jpg"
        }
      ]
    },
    {
      id: 2,
      brand: "BMW",
      models: [
        {
          id: 201,
          name: "X5",
          type: "suv",
          capacity: "6 person",
          fuel: "gasoline",
          rentalPrice: { category: "luxury", price: 120 },
          tankCapacity: "80 liters",
          image: "https://example.com/images/bmw_x5.jpg"
        },
        {
          id: 202,
          name: "X3",
          type: "suv",
          capacity: "4 person",
          fuel: "gasoline",
          rentalPrice: { category: "standard", price: 90 },
          tankCapacity: "60 liters",
          image: "https://example.com/images/bmw_x3.jpg"
        },
        {
          id: 203,
          name: "3 Series",
          type: "sedan",
          capacity: "4 person",
          fuel: "gasoline",
          rentalPrice: { category: "standard", price: 85 },
          tankCapacity: "55 liters",
          image: "https://example.com/images/bmw_3_series.jpg"
        },
        {
          id: 204,
          name: "7 Series",
          type: "sedan",
          capacity: "4 person",
          fuel: "gasoline",
          rentalPrice: { category: "luxury", price: 140 },
          tankCapacity: "78 liters",
          image: "https://example.com/images/bmw_7_series.jpg"
        },
        {
          id: 205,
          name: "i4",
          type: "sedan",
          capacity: "4 person",
          fuel: "electric",
          rentalPrice: { category: "luxury", price: 150 },
          tankCapacity: "83 kWh",
          image: "https://example.com/images/bmw_i4.jpg"
        },
        {
          id: 206,
          name: "iX",
          type: "suv",
          capacity: "6 person",
          fuel: "electric",
          rentalPrice: { category: "luxury", price: 180 },
          tankCapacity: "111.5 kWh",
          image: "https://example.com/images/bmw_ix.jpg"
        }
      ]
    },
    {
      id: 3,
      brand: "Mercedes-Benz",
      models: [
        {
          id: 301,
          name: "C-Class",
          type: "sedan",
          capacity: "4 person",
          fuel: "gasoline",
          rentalPrice: { category: "standard", price: 100 },
          tankCapacity: "66 liters",
          image: "https://example.com/images/mercedes_c_class.jpg"
        },
        {
          id: 302,
          name: "E-Class",
          type: "sedan",
          capacity: "4 person",
          fuel: "gasoline",
          rentalPrice: { category: "luxury", price: 130 },
          tankCapacity: "70 liters",
          image: "https://example.com/images/mercedes_e_class.jpg"
        },
        {
          id: 303,
          name: "S-Class",
          type: "sedan",
          capacity: "4 person",
          fuel: "gasoline",
          rentalPrice: { category: "luxury", price: 200 },
          tankCapacity: "80 liters",
          image: "https://example.com/images/mercedes_s_class.jpg"
        },
        {
          id: 304,
          name: "GLA",
          type: "suv",
          capacity: "6 person",
          fuel: "gasoline",
          rentalPrice: { category: "standard", price: 90 },
          tankCapacity: "56 liters",
          image: "https://example.com/images/mercedes_gla.jpg"
        },
        {
          id: 305,
          name: "EQC",
          type: "suv",
          capacity: "6 person",
          fuel: "electric",
          rentalPrice: { category: "luxury", price: 180 },
          tankCapacity: "93 kWh",
          image: "https://example.com/images/mercedes_eqc.jpg"
        }
      ]
    },
    {
      id: 4,
      brand: "Tesla",
      models: [
        {
          id: 401,
          name: "Model S",
          type: "sedan",
          capacity: "4 person",
          fuel: "electric",
          rentalPrice: { category: "luxury", price: 160 },
          tankCapacity: "100 kWh",
          image: "https://example.com/images/tesla_model_s.jpg"
        },
        {
          id: 402,
          name: "Model 3",
          type: "sedan",
          capacity: "4 person",
          fuel: "electric",
          rentalPrice: { category: "standard", price: 120 },
          tankCapacity: "75 kWh",
          image: "https://example.com/images/tesla_model_3.jpg"
        },
        {
          id: 403,
          name: "Model X",
          type: "suv",
          capacity: "6 person",
          fuel: "electric",
          rentalPrice: { category: "luxury", price: 200 },
          tankCapacity: "100 kWh",
          image: "https://example.com/images/tesla_model_x.jpg"
        },
        {
          id: 404,
          name: "Model Y",
          type: "suv",
          capacity: "6 person",
          fuel: "electric",
          rentalPrice: { category: "luxury", price: 140 },
          tankCapacity: "82 kWh",
          image: "https://example.com/images/tesla_model_y.jpg"
        }
      ]
    },
    {
      id: 5,
      brand: "Audi",
      models: [
        {
          id: 501,
          name: "A4",
          type: "sedan",
          capacity: "4 person",
          fuel: "gasoline",
          rentalPrice: { category: "standard", price: 85 },
          tankCapacity: "60 liters",
          image: "https://example.com/images/audi_a4.jpg"
        },
        {
          id: 502,
          name: "Q5",
          type: "suv",
          capacity: "6 person",
          fuel: "gasoline",
          rentalPrice: { category: "standard", price: 100 },
          tankCapacity: "70 liters",
          image: "https://example.com/images/audi_q5.jpg"
        },
        {
          id: 503,
          name: "e-tron",
          type: "suv",
          capacity: "6 person",
          fuel: "electric",
          rentalPrice: { category: "luxury", price: 170 },
          tankCapacity: "95 kWh",
          image: "https://example.com/images/audi_etron.jpg"
        }
      ]
    }
  ];
  