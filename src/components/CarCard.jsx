import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CarCard = ({ car }) => {
    const {_id, image, daily_rent, type, car_name, pickup_location, availability, seat_capacity } = car;
    return (
        <Card>
            <div className='relative'>
                <Image src={image} alt={car_name} width={500} height={500} className='w-full h-70 content-center object-center border rounded-2xl'></Image>
                <p className='absolute top-2 left-2'><Chip size='lg' color="success" className={`${availability ? '' : 'text-yellow-500'}`}>{availability ? 'Available' : 'Unavailable'}</Chip></p>
                <p className='absolute top-2 right-2'><Chip size='lg'>{type}</Chip></p>
            </div>
            <p><Chip size='lg' color="accent">{pickup_location}</Chip></p>
            <div className='flex justify-between items-center'>                
                <h2 className='text-3xl font-bold'>{car_name}</h2>
                <h3><span className='font-bold text-2xl'>${daily_rent}</span><span className='text-sm text-muted'>/day</span></h3>
            </div>
            <div className='flex justify-between items-center'>
                <h4>Seats:</h4>
                <p>{seat_capacity}</p>
            </div>
            <Link href={`/explore-cars/${_id}`}><Button variant='outline' className={'w-full border-[#4e4e35] text-[#4e4e35] text-lg'}>View Details</Button></Link>

        </Card>
    );
};

export default CarCard;