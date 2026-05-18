'use client';

import Link from 'next/link';
import { FaFacebookF, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { MdOutlineMail, MdOutlinePhone } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import Image from 'next/image';
import { cinzel } from '@/app/fonts';


const Footer = () => {
    return (
        <footer className="shadow-sm bg-[#d9d9d8] border border-t-[#4e4e35] mt-6">
            <div className="w-11/12 lg:w-10/12 mx-auto py-16">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="space-y-5">
                        <div>
                            <Link href={'/'}><Image src={'/assets/drive_Fleet2.png'} alt='drive fleet logo' width={150} height={100} ></Image></Link>
                        </div>

                        <p className={'text-[#4e4e35]'}>
                            Experience premium car rentals with comfort,
                            luxury, and reliability. Drive your dream car
                            anytime, anywhere.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 pt-2">

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C8B26A] hover:text-black transition-all duration-300"
                            >
                                <FaFacebookF />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C8B26A] hover:text-black transition-all duration-300"
                            >
                                <FaInstagram />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C8B26A] hover:text-black transition-all duration-300"
                            >
                                <FaXTwitter />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C8B26A] hover:text-black transition-all duration-300"
                            >
                                <FaGithub />
                            </Link>

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className={`${cinzel.className} text-xl font-bold mb-6 text-[#4e4e35]`}>
                            Quick Links
                        </h3>

                        <ul className="space-y-4 text-[#979767] font-semibold">

                            <li>
                                <Link href="/" className="hover:text-[#4c4c37] transition">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/explore-cars" className="hover:text-[#4c4c37] transition">
                                    Explore Cars
                                </Link>
                            </li>

                            <li>
                                <Link href="/add-car" className="hover:text-[#4c4c37] transition">
                                    Add Car
                                </Link>
                            </li>

                            <li>
                                <Link href="/my-bookings" className="hover:text-[#4c4c37] transition">
                                    My Bookings
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className={`${cinzel.className} text-xl font-bold mb-6 text-[#4e4e35]`}>
                            Services
                        </h3>

                        <ul className="space-y-4 text-[#979767] font-semibold">

                            <li>
                                Luxury Car Rental
                            </li>

                            <li>
                                Airport Pickup
                            </li>

                            <li>
                                Business Travel
                            </li>

                            <li>
                                Long-Term Rental
                            </li>

                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className={`${cinzel.className} text-xl font-bold mb-6 text-[#4e4e35]`}>
                            Contact Info
                        </h3>

                        <div className="space-y-5 text-[#979767] font-semibold">

                            <div className="flex items-start gap-3">
                                <IoLocationOutline className="text-2xl" />
                                <p>
                                    Dhaka, Bangladesh
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <MdOutlinePhone className="text-2xl" />
                                <p>
                                    +880 1234-567890
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <MdOutlineMail className="text-2xl" />
                                <p>
                                    support@drivefleet.com
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-400 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-gray-800 text-sm text-center md:text-left">
                        © 2026 DriveFleet. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-800">

                        <Link href="#">
                            Privacy Policy
                        </Link>

                        <Link href="#">
                            Terms & Conditions
                        </Link>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;