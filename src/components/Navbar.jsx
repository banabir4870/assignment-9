'use client'
import { cinzel } from '@/app/fonts';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Dropdown } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user;

    const handleLogOut = async () => {
        await authClient.signOut()
        redirect('/login')
    }
    return (
        <div className='shadow-sm bg-[#d9d9d8c7] border border-b-[#4e4e35]'>
            <nav className='w-10/12 mx-auto flex justify-between items-center py-2'>
                {/* logo */}
                <div>
                    <NavLink href={'/'}><Image src={'/assets/drive_Fleet2.png'} alt='drive fleet logo' width={150} height={100} ></Image></NavLink>
                </div>
                {/* links */}
                <div>
                    <ul className={`${cinzel.className} grid md:grid-cols-2 lg:grid-cols-4 items-center gap-6 hidden md:grid`}>
                        <li><NavLink href={'/'} className='text-[#847c6f] font-bold hover:text-[#4e4e35]'>Home</NavLink></li>
                        <li><NavLink href={'/explore-cars'} className='text-[#847c6f] font-bold hover:text-[#4e4e35]'>Explore Cars</NavLink></li>
                        <li><NavLink href={'/add-car'} className='text-[#847c6f] font-bold hover:text-[#4e4e35]'>Add Car</NavLink></li>
                        <li><NavLink href={'/my-bookings'} className='text-[#847c6f] font-bold hover:text-[#4e4e35]'>My Bookings</NavLink></li>
                    </ul>
                </div>
                {/* profile/login */}
                <div>
                    {!user ? <Link href={'/login'}><Button variant='outline' className={`${cinzel.className} border-[#4e4e35] text-[#4e4e35] hover:bg-[#4e4e35] hover:text-white`}>LogIn</Button></Link> : <Dropdown>
                        <Button aria-label="Menu" variant="outline" className={'border border-[#4e4e35]'}>
                            <Avatar size='sm'>
                                <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                            </Avatar>
                            <h2>{user?.name}</h2>
                        </Button>
                        <Dropdown.Popover>
                            <Dropdown.Menu>
                                <Dropdown.Item id="new-file">
                                    <Link href={'/add-car'}>Add Car</Link>
                                </Dropdown.Item>
                                <Dropdown.Item id="copy-link">
                                    <Link href={'/my-bookings'}>My Bookings</Link>
                                </Dropdown.Item>
                                <Dropdown.Item id="edit-file">
                                    <Link href={'/my-added-cars'}>My Added Cars</Link>
                                </Dropdown.Item>
                                <Dropdown.Item id="logout" textValue="logout" onPress={handleLogOut} variant="danger" className="text-danger" color="danger">
                                    Logout
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;