'use client'
import { Button, Card, Description, FieldError, Form, Input, Label, TextField, Select, ListBox, TextArea, cardVariants } from '@heroui/react';
import React from 'react';
import { cinzel } from '../fonts';
import { useSession } from '@/lib/auth-client';
import { redirect, useRouter } from 'next/navigation';

const AddCarPage = () => {
    const router = useRouter()
    const { data: session } = useSession();
    console.log('session', session)
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const carData = Object.fromEntries(formData.entries());
        carData.availability = carData.availability === "true";
        carData.owner_email = session?.user?.email;
        carData.owner_name = session?.user?.name;
        carData.booking_count = 0;

        console.log('car data: ', carData);

        const res = await fetch("http://localhost:5000/all-car", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(carData),
        });

        const data = await res.json()

        if (res.ok) {
            alert("Car added successfully");
            router.push("/explore-cars");
        } else {
            alert(data.message || "Failed to add car");
        }

    }
    return (
        <Card className='w-1/2 mx-auto my-10'>
            <div className='my-2'>
                <h1 className={`${cinzel.className} mb-2 font-bold text-center text-3xl`}>Turn Your Car Into Income</h1>
                <p className='text-muted text-center'>List your vehicle on DriveFleet and let users book trusted, comfortable rides anytime they need.</p>
            </div>
            <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                {/* car name */}
                <TextField
                    isRequired
                    name="car_name"
                >
                    <Label>Car Name</Label>
                    <Input placeholder="Enter Your Car Name" />
                    <FieldError />
                </TextField>
                {/* daily rent */}
                <TextField
                    isRequired
                    name="daily_rent"
                >
                    <Label>Daily Rent Price</Label>
                    <Input placeholder="How Much Do You Want For A Day?" />
                    <FieldError />
                </TextField>
                {/* car type */}
                <Select
                    name="type"
                    isRequired
                    className="w-full"
                    placeholder="Select Your Car Type"
                >
                    <Label>Car Type</Label>
                    <Select.Trigger className="rounded-xl">
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="SUV" textValue="SUV">
                                SUV
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Sedan" textValue="Sedan">
                                Sedan
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Hatchback" textValue="Hatchback">
                                Hatchback
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Luxury" textValue="Luxury">
                                Luxury
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Van" textValue="Van">
                                Van
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Sports" textValue="Sports">
                                Sports
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Hybrid" textValue="Hybrid">
                                Hybrid
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Electric" textValue="Electric">
                                Electric
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>
                {/* image url */}
                <TextField
                    name="image"
                >
                    <Label>Image URL</Label>
                    <Input placeholder="Enter Your Image URL" />
                    <FieldError />
                </TextField>
                {/* seat capacity */}
                <TextField
                    isRequired
                    name="seat_capacity"
                >
                    <Label>Seat Capacity</Label>
                    <Input placeholder="Seat Capacity" />
                    <FieldError />
                </TextField>
                {/* pickup location */}
                <TextField
                    isRequired
                    name="pickup_location"
                >
                    <Label>Pickup Location</Label>
                    <Input placeholder="Enter Pickup Location" />
                    <FieldError />
                </TextField>
                {/* description */}
                <TextField
                    isRequired
                    name="description"
                >
                    <Label>Description</Label>
                    <TextArea placeholder="Write About Your Car" />
                    <Description>Minimum 20 characters</Description>
                    <FieldError />
                </TextField>
                {/* description */}
                <Select
                    name="availability"
                    isRequired
                    className="w-full"
                    placeholder="Is Your Car Available Now?"
                >
                    <Label>Availability</Label>
                    <Select.Trigger className="rounded-xl">
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="true" textValue="Available">
                                Available
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="false" textValue="Unavailable">
                                Unavailable
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                <div className="flex gap-2">
                    <Button type="submit" className={'w-full rounded-sm'}>
                        Add Car
                    </Button>
                </div>
            </Form>
        </Card>
    );
};

export default AddCarPage;