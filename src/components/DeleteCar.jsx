"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";

export function DeleteCar({ car }) {

    const handleDelete = async () => {
        const { data: tokenData } = await authClient.token()
        const res = await fetch(`http://localhost:5000/all-car/${car._id}`, {
            method: 'DELETe',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
        })
        const data = await res.json()
        if (res.ok) {
            alert("Car Deleted Form My Added Cars Successfully");
            redirect("/explore-cars");
        } else {
            alert(data.message || "Failed to add car");
        }
    }
    return (
        <AlertDialog>
            <Button variant='danger-soft' className='inline-flex items-center gap-2 rounded-none'><RiDeleteBin6Line /> Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Car Permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{car.car_name}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Confrim Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}