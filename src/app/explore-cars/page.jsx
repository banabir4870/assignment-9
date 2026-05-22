import CarCard from '@/components/CarCard';
import { cinzel } from '../fonts';
import { Button } from '@heroui/react';

export const metadata = {
  title: "DriveFleet | Explore Cars",
};

const ExploreCarsPage = async ({ searchParams }) => {
    const params = await searchParams || {};

    const search = params?.search || '';
    const type = params?.type || '';

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/all-car?search=${search}&type=${type}`,
        { cache: 'no-store' }
    );

    const allCars = await res.json();

    return (
        <div className='w-10/12 mx-auto my-6'>
            <div className='text-center space-y-2 mb-10'>
                <h1 className={`${cinzel.className} font-semibold text-2xl md:text-4xl text-[#4e4e35]`}>
                    Explore Premium Cars
                </h1>
                <p>Choose from luxury, SUV, sedan and sports cars</p>
            </div>
            <form className="flex gap-4 justify-center mb-8">
                <input
                    type="text"
                    name="search"
                    defaultValue={search}
                    placeholder="Search car name..."
                    className="border-2 border-[#4e4e35] w-2/6 px-2"
                />
                <select
                    name="type"
                    defaultValue={type}
                    className="border-2 border-[#4e4e35] w-1/6 px-2"
                >
                    <option value="">All</option>
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Van">Van</option>
                    <option value="Sports">Sports</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Electric">Electric</option>
                </select>
                <Button
                    type="submit"
                    className="bg-[#4e4e30] border-[#4e4e35] text-white px-8 py-3 rounded-none"
                >
                    Search
                </Button>
            </form>
            <div className='grid lg:grid-cols-3 gap-6'>
                {allCars.length === 0 ? (
                    <div className="col-span-full text-center py-10">
                        <h2 className="text-2xl font-semibold text-gray-500">
                            No Cars Found 🚗
                        </h2>
                        <p className="text-gray-400 mt-2">
                            Try searching with different keywords or filters
                        </p>
                    </div>
                ) : (
                    allCars.map(car => (
                        <CarCard key={car._id} car={car} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ExploreCarsPage;