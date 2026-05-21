"use client";

import { cinzel } from "@/app/fonts";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField, Select, ListBox, FieldError, TextArea } from "@heroui/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { use, useState } from "react";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

export function BookingCarModal({ car }) {
    const userData = authClient.useSession()
    const user = userData.data?.user;
    const [bookingDate, setBookingDate] = useState(null)
    console.log("user from here:", user)
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        const bookingData = {
            ...userData,
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            carId: car._id,
            carName: car.car_name,
            price: car.daily_rent,
            image: car.image,
            carType: car.type,
            location: car.pickup_location,
            bookingDate: new Date()
        }

        const {data: tokenData} = await authClient.token()

        const res = await fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        })

        const data = await res.json()
        if (res.ok) {
            toast.success("Car Booked Successfully");
            redirect("/explore-cars");
        } else {
            toast.error(data.message || "Failed to add car");
        }
    }
return (
    <Modal>
        <Button variant='outline' className={`w-full rounded-lg ${cinzel.className} text-[#4e4e35] border-[#4e4e35] text-xl hover:text-white hover:bg-[#4e4e35]`}>Book Now</Button>
        <Modal.Backdrop>
            <Modal.Container placement="auto">
                <Modal.Dialog className="sm:max-w-xl">
                    <Modal.CloseTrigger />
                    <Modal.Header>
                        <Modal.Heading>Book The Best</Modal.Heading>
                        <p className="mt-1.5 text-sm leading-5 text-muted">
                            Book your premium, luxurious and comfortable car now.
                        </p>
                    </Modal.Header>
                    <Modal.Body className="p-6">
                        <Surface variant="default">
                            <form onSubmit={onSubmit}
                                className="p-10 space-y-8"
                            >
                                {/* Need Driver? */}
                                <Select
                                    name="driver"
                                    isRequired
                                    className="w-full"
                                    placeholder="Select Your Car Type"
                                >
                                    <Label>Need Driver</Label>
                                    <Select.Trigger className="rounded-xl">
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="Yes" textValue="Yes">
                                                Yes
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="No" textValue="No">
                                                No
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                                {/* Description */}
                                <TextField name="note">
                                    <Label>Special Note</Label>
                                    <TextArea
                                        placeholder="Any Special Note..."
                                        className="rounded-3xl"
                                    />
                                    <FieldError />
                                </TextField>

                                {/* Buttons */}

                                <Modal.Footer>
                                    <Button type="submit" slot="close" variant="secondary">Book Now</Button>
                                </Modal.Footer>
                            </form>
                        </Surface>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal.Container>
        </Modal.Backdrop>
    </Modal>
);
}