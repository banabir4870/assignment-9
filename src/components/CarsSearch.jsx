'use client';

import { Button } from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function CarsSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get('search') || '');
    const [type, setType] = useState(searchParams.get('type') || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (search) params.set('search', search);
        if (type) params.set('type', type);
        router.push(`/explore-cars?${params.toString()}`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col md:flex-row gap-4 mb-8'
        >
            <input
                type="text"
                placeholder="Search car name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='border p-2 rounded w-full md:w-1/3'
            />

            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className='border p-2 rounded w-full md:w-1/3'
            >
                <option value="">All Types</option>
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
                className='bg-[#4e4e35] text-white px-6 rounded'
            >
                Search
            </Button>
        </form>
    );
}