import { auth } from '@/lib/auth';
import { Button, Card, Chip } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { cinzel } from '../fonts';
import Image from 'next/image';
import { DeleteCar } from '@/components/DeleteCar';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { UpdateCarModal } from '@/components/UpdateCarModal';

export const metadata = {
  title: "DriveFleet | My Cars",
};

const MyAddedCarsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const user = session?.user;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-car/user/${user?.email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const cars = await res.json()
    return (
        <div className='w-10/12 lg:w-8/12 mx-auto my-10'>
            <div className='lg:flex justify-between my-6'>
                <h1 className={`${cinzel.className} mb-2 font-bold text-center text-2xl lg:text-3xl`}>My Cars For Rent</h1>
                <div className='flex justify-center'>
                    <Link href={'/add-car'}><Button variant='outline' className='text-[#847c6f] border-[#847c6f] font-bold hover:text-[#4e4e35] hover:border-[#4e4e35] hover:bg-gray-100'>Add Car</Button></Link>
                </div>
            </div>
            <div className='grid gap-6'>
                {
                    cars.length > 0 ? cars.map(car => <div key={car._id}>
                        <Card className='border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
                            <div className='lg:flex gap-4'>
                                <div>
                                    <Image src={car.image} alt={car.car_name} height={500} width={500} className='border rounded-lg w-full lg:w-[200px]'></Image>
                                </div>
                                <div className='lg:flex-1 lg:flex justify-between items-center space-y-4 lg:space-y-null'>
                                    <div className='space-y-4 lg:space-y-1'>
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
                    </div>) :
                        <Card className='py-20 border text-center space-y-4'>
                            <h1 className={`text-3xl font-bold ${cinzel.className}`}>
                                No Cars
                            </h1>

                            <p className='text-muted'>
                                You have not registered any car for rent. Click Add Car for registering your first car for rent.
                            </p>
                        </Card>
                }
            </div>
        </div >
    );
};

export default MyAddedCarsPage;