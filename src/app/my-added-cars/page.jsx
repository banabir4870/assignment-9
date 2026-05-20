import { auth } from '@/lib/auth';
import { Button, Card, Chip } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { cinzel } from '../fonts';
import Image from 'next/image';
import { BookingCancelAlert } from '@/components/BookingCancelAlert';
import { DeleteCar } from '@/components/DeleteCar';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { FaRegEdit } from 'react-icons/fa';
import { UpdateCarModal } from '@/components/UpdateCarModal';

const MyAddedCarsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    console.log('user: ', user);

    const res = await fetch(`http://localhost:5000/all-car/user/${user?.email}`)
    const cars = await res.json()
    return (
        <div className='w-8/12 mx-auto my-10'>
            <div className='flex justify-between my-6'>
                <h1 className={`${cinzel.className} mb-2 font-bold text-center text-3xl`}>My Cars For Rent</h1>
                <Link href={'/add-car'}><Button variant='outline' className='text-[#847c6f] border-[#847c6f] font-bold hover:text-[#4e4e35] hover:border-[#4e4e35] hover:bg-gray-100'>Add Car</Button></Link>
            </div>
            <div className='grid gap-6'>
                {
                    cars.map(car => <div key={car._id}>
                        <Card className='border'>
                            <div className='flex gap-4'>
                                <div>
                                    <Image src={car.image} alt={car.car_name} height={200} width={200} className='border rounded-lg'></Image>
                                </div>
                                <div className='flex-1 flex justify-between items-center'>
                                    <div className='space-y-2'>
                                        <div className='flex gap-10 items-center'>
                                            <h1 className={`text-3xl font-bold ${cinzel.className}`}>{car.car_name}</h1>
                                            <p className='text-3xl font-semibold'>${car.daily_rent}</p>
                                        </div>
                                        <div className='flex gap-6'>
                                            <Chip size='lg'>{car.type}</Chip>
                                            <Chip size='lg' color='accent'>{car.seat_capacity} <MdAirlineSeatReclineExtra /></Chip>
                                            <Chip size='lg' color='warning'><CiLocationOn />{car.pickup_location}</Chip>
                                        </div>
                                        <Chip className={`${car.availability ? 'text-green-700' : 'text-yellow-700'}`}>{car.availability ? 'Available' : 'Unavailable'}</Chip>
                                    </div>
                                    <div className='flex gap-4'>
                                        <UpdateCarModal car={car}></UpdateCarModal>
                                        <DeleteCar car={car}></DeleteCar>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>)
                }
            </div>
        </div >
    );
};

export default MyAddedCarsPage;