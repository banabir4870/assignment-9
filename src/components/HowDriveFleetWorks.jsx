import React from 'react';
import { Card } from '@heroui/react';
import { cinzel } from '@/app/fonts';

const steps = [
    {
        id: '01',
        title: 'Explore Cars',
        description:
            'Browse a wide collection of premium, luxury, and comfortable cars based on your needs.',
    },
    {
        id: '02',
        title: 'Book Instantly',
        description:
            'Choose your preferred vehicle, add booking details, and confirm your reservation securely.',
    },
    {
        id: '03',
        title: 'Drive Comfortably',
        description:
            'Pick up your booked vehicle and enjoy a safe, smooth, and premium driving experience.',
    },
];

const HowDriveFleetWorks = () => {
    return (
        <section className="w-10/12 mx-auto my-24">

            {/* heading */}
            <div className="text-center max-w-3xl mx-auto mb-14">

                <h1 className={`text-4xl font-bold mb-4 text-[#4e4e35] ${cinzel.className}`}>
                    How DriveFleet Works
                </h1>

                <p className="text-muted text-lg">
                    Rent your desired vehicle in just a few simple and hassle-free steps.
                </p>

            </div>

            {/* steps */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {
                    steps.map(step => (
                        <Card
                            key={step.id}
                            className="relative overflow-hidden p-8 border hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-full bg-[#4e4e35] text-white flex items-center justify-center text-xl font-bold mb-6">
                                    {step.id}
                                </div>
                                <h2 className={`text-2xl font-semibold mb-4 ${cinzel.className}`}>
                                    {step.title}
                                </h2>
                                <p className="text-muted leading-7">
                                    {step.description}
                                </p>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </section>
    );
};

export default HowDriveFleetWorks;