"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField, Select, ListBox, FieldError, TextArea } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

export function UpdateCarModal({ car }) {
    const { _id, image, availability, type, daily_rent, description, pickup_location } = car;
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedData = Object.fromEntries(formData.entries());
        updatedData.availability = updatedData.availability === "true";
        const {data: tokenData} = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-car/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(updatedData),
        });

        const data = await res.json()

        if (res.ok) {
            toast.success("Car Data Updated Successfully");
            redirect("/explore-cars");
        } else {
            toast.error(data.message || "Failed to add car");
        }
    }
    return (
        <Modal>
            <Button variant='secondary' className='inline-flex items-center gap-2 rounded-none'><FaRegEdit /> Update</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Update Car Info</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Make changes to the car details below
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit}
                                    className="p-10 space-y-8"
                                >
                                    {/* type */}
                                    <Select
                                        defaultValue={type}
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
                                    {/* price */}
                                    <TextField defaultValue={daily_rent} name="daily_rent" isRequired>
                                        <Label>Daily Rent</Label>
                                        <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                        <FieldError />
                                    </TextField>
                                    {/* availability */}
                                    <Select
                                        defaultValue={availability}
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

                                    {/* image */}
                                    <TextField defaultValue={image} name="image">
                                        <Label>Image URL</Label>
                                        <Input
                                            placeholder="URL"
                                            className="rounded-2xl"
                                        />
                                        <FieldError />
                                    </TextField>
                                    {/* pickup location */}
                                    <TextField defaultValue={pickup_location} name="pickup_location">
                                        <Label>Pickup Location</Label>
                                        <Input
                                            placeholder="pickup location"
                                            className="rounded-2xl"
                                        />
                                        <FieldError />
                                    </TextField>

                                    {/* Description */}
                                    <TextField defaultValue={description} name="description" isRequired>
                                        <Label>Description</Label>
                                        <TextArea
                                            placeholder="Describe about your car..."
                                            className="rounded-3xl"
                                        />
                                        <FieldError />
                                    </TextField>

                                    {/* Buttons */}

                                    <Modal.Footer>
                                        <Button slot="close" variant="danger-soft">
                                            <RiDeleteBin6Line /> Cancel
                                        </Button>
                                        <Button type="submit" slot="close" variant="secondary"><IoIosSave /> Save Changes</Button>
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