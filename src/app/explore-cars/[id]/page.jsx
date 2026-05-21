
import { cinzel } from '@/app/fonts';
import { BookingCarModal } from '@/components/BookingCarModal';
import SpecificationTable from '@/components/SpecificationTable';
import { auth } from '@/lib/auth';
import { Card, Chip } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const CarDetailsPage = async ({ params }) => {
    const { id } = await params;
    const {token} = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-car/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const car = await res.json()
    const { availability, booking_count, car_name, daily_rent, description, image, owner_email, owner_name, pickup_location, seat_capacity, type, _id } = car;
    return (
        <Card className='w-10/12 lg:w-8/12 mx-auto my-10'>
            {/* 1st section */}
            <div className='relative'>
                <Image src={image} alt={car_name} width={1500} height={1500} className='w-fit lg:w-full lg:h-[80vh] content-center object-center border rounded-2xl'></Image>
                <p className='absolute top-2 left-2'><Chip size='lg' color="success" className={`${availability ? '' : 'text-yellow-500'}`}>{availability ? 'Available' : 'Unavailable'}</Chip></p>
                <p className='absolute top-2 right-2'><Chip size='lg'>{type}</Chip></p>
            </div>
            <p><Chip size='lg' color="accent">{pickup_location}</Chip></p>
            <div className='lg:flex justify-between items-center'>
                <h2 className={`text-3xl font-bold ${cinzel.className}`}>{car_name}</h2>
                <h3><span className='font-bold text-2xl'>${daily_rent}</span><span className='text-sm text-muted'>/day</span></h3>
            </div>
            {/* 2nd section */}
            <div className='grid lg:grid-cols-3 gap-4'>
                <div className='lg:col-span-2'>
                    <div>
                        <h1 className={`text-xl font-bold ${cinzel.className}`}>Overview:</h1>
                        <p className='text-muted'>{description}</p>
                    </div>

                </div>
                <div className='lg:col-span-1 space-y-2'>
                    <SpecificationTable car={car}></SpecificationTable>
                    <BookingCarModal car={car}></BookingCarModal>
                </div>
            </div>

        </Card>
    );
};

export default CarDetailsPage;