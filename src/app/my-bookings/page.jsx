import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import { cinzel } from '../fonts';
import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { BookingCancelAlert } from '@/components/BookingCancelAlert';
import { SlCalender } from 'react-icons/sl';

const MyBookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const user = session?.user;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    const bookings = await res.json()

    return (
        <div className='w-10/12 lg:w-8/12 mx-auto my-10'>
            <div>
                <h1 className={`${cinzel.className} mb-2 font-bold text-center text-2xl md:text-3xl`}>My Bookings</h1>
            </div>

            <div className='grid gap-6'>
                {
                    bookings.length > 0 ? bookings.map(booking => <div key={booking._id}>
                        <Card className='border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
                            <div className='lg:flex gap-4'>
                                <div>
                                    <Image src={booking.image} alt={booking.carName} height={500} width={500} className='border rounded-lg w-full lg:w-[200px]'></Image>
                                </div>
                                <div className='lg:flex-1 md:flex justify-between items-center'>
                                    <div className='space-y-4'>
                                        <div className='flex gap-10 items-center'>
                                            <h1 className={`text-3xl font-bold ${cinzel.className}`}>{booking.carName}</h1>
                                            <p className='text-3xl font-semibold'>${booking.price}</p>
                                        </div>
                                        <div className='flex gap-6'>
                                            <Chip size='lg'>{booking.carType}</Chip>
                                            <Chip size='lg' color='warning'><CiLocationOn />{booking.location}</Chip>
                                        </div>
                                        <p className='flex items-center gap-2'><SlCalender />{new Date(booking.bookingDate).toLocaleString()}</p>
                                    </div>
                                    <div className='flex gap-4 mt-4 lg:mt-null'>
                                        <BookingCancelAlert booking={booking}></BookingCancelAlert>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>) :
                        <Card className='py-20 border text-center space-y-4'>
                            <h1 className={`text-3xl font-bold ${cinzel.className}`}>
                                No Bookings Yet
                            </h1>

                            <p className='text-muted'>
                                You have not booked any cars yet.
                            </p>
                        </Card>
                }
            </div>

        </div>
    );
};

export default MyBookingsPage;