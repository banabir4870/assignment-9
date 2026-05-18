import React from 'react';
import bgImage from '../../public/assets/dream.jpg';
import { cinzel } from "@/app/fonts";
import Link from 'next/link';
import { Button, Chip } from '@heroui/react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div
            className='relative bg-cover bg-center'
            style={{ backgroundImage: `url(${bgImage.src})` }}
        >
            <div className='absolute inset-0 bg-black/20'></div>
            <div className="relative w-10/12 mx-auto pt-60 pb-52 space-y-8 z-10">
                <Chip className='flex gap-2 w-fit'>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4e4e35]" />
                    <span className='text-[#4e4e35]'>
                        Bangladesh&apos;s #1 car rental
                    </span>
                </Chip>
                <h1 className={`text-[#F8F5E9] font-semibold text-5xl ${cinzel.className}`}>
                    Rent the perfect car for <br /> every journey
                </h1>

                <p className='text-2xl font-light text-white'>
                    DriveFleet gives you instant access to 20+ premium, verified
                    vehicles across Bangladesh. <br /> Whether it&apos;s a business trip, family
                    vacation, or a weekend getaway — <br /> we have the right car waiting
                    for you. Transparent pricing, <br /> zero hidden fees, and flexible
                    pickup at your city.
                </p>
                <Link href={'/explore-cars'}><Button variant='outline' className={'font-bold border-white/80 text-white/80 hover:bg-[#4e4e35] hover:text-white text-xl flex gap-2 items-center'}>Explore Cars <FaArrowRightLong /></Button></Link>
            </div>
        </div>
    );
};

export default Banner;