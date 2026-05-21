import CarCard from '@/components/CarCard';
import React from 'react';
import { cinzel } from '../fonts';
import CarsSearch from '@/components/CarsSearch';

const ExploreCarsPage = async ({ searchParams }) => {
    const params = await searchParams;

    const search = params?.search || '';
    const type = params?.type || '';

    const res = await fetch(
        `http://localhost:5000/all-car?search=${search}&type=${type}`,
        { cache: 'no-store' }
    );

    const allCars = await res.json();

    return (
        <div className='w-10/12 mx-auto my-6'>
            <div className='text-center space-y-2 mb-10'>
                <h1 className={`${cinzel.className} font-semibold text-2xl md:text-4xl text-[#4e4e35]`}>
                    Explore Premium Cars
                </h1>
                <p>Choose from a wide range of luxury, SUV, sedan and sports cars.</p>
            </div>
            <CarsSearch />
            <div className='grid lg:grid-cols-3 gap-6'>
                {
                    allCars.length > 0 ? (
                        allCars.map(car => (
                            <CarCard key={car._id} car={car} />
                        ))
                    ) : (
                        <div className='col-span-3 text-center py-20 text-gray-500'>
                            No cars found
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ExploreCarsPage;