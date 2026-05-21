// components/WhyChooseDriveFleet.jsx

import React from 'react';
import { Card } from '@heroui/react';
import { FaCarSide, FaShieldAlt, FaBolt, FaMoneyBillWave } from 'react-icons/fa';
import { cinzel } from '@/app/fonts';

const features = [
    {
        id: 1,
        icon: <FaCarSide />,
        title: 'Premium Cars',
        description:
            'DriveFleet offers carefully maintained luxury and comfortable vehicles for every journey.',
    },
    {
        id: 2,
        icon: <FaShieldAlt />,
        title: 'Secure Booking',
        description:
            'Your bookings and personal information stay protected with advanced authentication security.',
    },
    {
        id: 3,
        icon: <FaMoneyBillWave />,
        title: 'Affordable Pricing',
        description:
            'Transparent daily rental pricing with no hidden costs or unexpected charges.',
    },
    {
        id: 4,
        icon: <FaBolt />,
        title: 'Instant Availability',
        description:
            'Quickly find available vehicles and confirm your booking within minutes.',
    },
];

const WhyChooseDriveFleet = () => {
    return (
        <section className="w-10/12 mx-auto my-24">
            <div className="text-center max-w-3xl mx-auto mb-14">
                <h1 className={`text-4xl font-bold mb-4 text-[#4e4e35] ${cinzel.className}`}>
                    Why Choose DriveFleet
                </h1>

                <p className="text-muted text-lg">
                    Premium vehicles, transparent pricing, and trusted service —
                    everything you need for a smooth and comfortable ride.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {
                    features.map(feature => (
                        <Card
                            key={feature.id}
                            className="p-8 border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="space-y-5">
                                <div className="w-16 h-16 rounded-full bg-[#4e4e35] text-white flex items-center justify-center text-3xl">
                                    {feature.icon}
                                </div>
                                <h2 className={`text-2xl font-semibold ${cinzel.className}`}>
                                    {feature.title}
                                </h2>
                                <p className="text-muted leading-7">
                                    {feature.description}
                                </p>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </section>
    );
};

export default WhyChooseDriveFleet;