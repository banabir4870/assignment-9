import Link from 'next/link';
import React from 'react';
import { Button } from '@heroui/react';
import { FaCarSide } from 'react-icons/fa';
import { cinzel } from './fonts';
import Image from 'next/image';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-white to-gray-100">

            <div className="text-center max-w-2xl">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <Image src={'/assets/drive_Fleet2.png'} alt='drive fleet logo' width={150} height={100}></Image>
                </div>

                {/* 404 */}
                <h1 className={`text-8xl font-bold text-[#4e4e35] mb-4 ${cinzel.className}`}>
                    404
                </h1>

                {/* Title */}
                <h2 className={`text-3xl font-semibold mb-3 ${cinzel.className}`}>
                    Route Not Found
                </h2>

                {/* Description */}
                <p className="text-muted text-lg mb-8">
                    Looks like the page you are trying to visit does not exist
                    or has been moved somewhere else.
                </p>

                {/* Button */}
                <Link href="/">
                    <Button
                        size="lg"
                        className="bg-[#4e4e35] text-white px-8 rounded-xl hover:scale-105 transition-transform"
                    >
                        Back To Home
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default NotFoundPage;