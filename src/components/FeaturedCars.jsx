import React from 'react';
import CarCard from './CarCard';
import { cinzel } from '@/app/fonts';

const FeaturedCars = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const cars = await res.json()
    return (
        <div className='w-10/12 mx-auto my-10'>
            <div className='text-center space-y-2 mb-10'>
                <h1 className={`${cinzel.className} font-semibold text-2xl md:text-4xl text-[#4e4e35]`}>Featured Collection</h1>
                <p>Explore our handpicked collection of premium vehicles designed for comfort, performance, and unforgettable driving experiences.</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-6'>
                {
                    cars.map(car => <CarCard key={car._id} car={car}></CarCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedCars;