export interface CarModel {
    id: number;
    name: string;
    type: string; // Тип (например, sedan, suv, hatchback)
    capacity: string; // Вместимость (например, "4 person")
    fuel: string; // Тип топлива (например, "gasoline", "electric")
    rentalPrice: {
        category: string; // Категория (например, "economy", "standard", "luxury")
        price: number; // Цена аренды
    };
    tankCapacity: string; // Объем бака (например, "50 liters" или "8.8 kWh")
    image: string; // URL изображения
}

// Интерфейс для бренда автомобилей
export interface CarBrand {
    id: number;
    brand: string; // Название бренда
    models: CarModel[]; // Массив моделей этого бренда
}
