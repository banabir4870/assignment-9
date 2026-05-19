import { cinzel } from '@/app/fonts';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='shadow-sm bg-[#d9d9d8c7] border border-b-[#4e4e35]'>
            <nav className='w-10/12 mx-auto flex justify-between items-center py-2'>
                {/* logo */}
                <div>
                    <Link href={'/'}><Image src={'/assets/drive_Fleet2.png'} alt='drive fleet logo' width={150} height={100} ></Image></Link>
                </div>
                {/* links */}
                <div>
                    <ul className={`${cinzel.className} flex items-center gap-6`}>
                        <li><Link href={'/'} className='text-[#847c6f] font-bold hover:text-[#4e4e35]'>Home</Link></li>
                        <li><Link href={'/explore-cars'} className='text-[#847c6f] font-bold hover:text-[#4e4e35]'>Explore Cars</Link></li>
                        <li><Link href={'/add-car'} className='text-[#847c6f] font-bold hover:text-[#4e4e35]'>Add Car</Link></li>
                        <li><Link href={'/my-bookings' } className='text-[#847c6f] font-bold hover:text-[#4e4e35]'>My Bookings</Link></li>
                    </ul>
                </div>
                {/* profile/login */}
                <div>
                    <Link href={'/login'}><Button variant='outline' className={`${cinzel.className} border-[#4e4e35] text-[#4e4e35] hover:bg-[#4e4e35] hover:text-white`}>LogIn</Button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;