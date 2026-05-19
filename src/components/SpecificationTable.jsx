import React from 'react';

export default function SpecificationTable({car}) {
    const { availability, booking_count, car_name, daily_rent, description, image, owner_email, owner_name, pickup_location, seat_capacity, type, _id } = car;
    return (
        <div className="border border-[#4e4e35] rounded-md overflow-hidden">

            {/* Heading */}
            <h2 className="bg-gray-100 px-4 py-3 text-xl font-semibold border-b border-[#4e4e35] text-center">
                Specifications
            </h2>

            {/* Table */}
            <table className="w-full border-collapse">
                <tbody>
                    <tr className="border-b">
                        <td className="font-semibold px-4 py-2 border-r">
                            Car Name
                        </td>
                        <td className="px-4 py-2">
                            {car_name}
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-semibold px-4 py-2 border-r">
                            Availability
                        </td>
                        <td className="px-4 py-2">
                            {availability ? 'Available' : 'Unavailable'}
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-semibold px-4 py-2 border-r">
                            Total Bookings By Customer
                        </td>
                        <td className="px-4 py-2">
                            {booking_count}
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-semibold px-4 py-2 border-r">
                            Seats
                        </td>
                        <td className="px-4 py-2">
                            {seat_capacity}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}