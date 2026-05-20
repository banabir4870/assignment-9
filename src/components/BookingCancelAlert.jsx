"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { BiTrash } from "react-icons/bi";

export function BookingCancelAlert({ booking }) {

    const handleCancelBooking = async () => {
        const {data: tokenData} = await authClient.token()
        const res = await fetch(`http://localhost:5000/booking/${booking._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            }
        })
        const data = await res.json()

        if (res.ok) {
            alert("Booking Cancelled Successfully");
            redirect("/explore-cars");
        } else {
            alert(data.message || "Failed to add car");
        }

    }
    return (
        <AlertDialog>
            <Button variant='danger-soft' className={'rounded-none'}><BiTrash />Cancel</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel Booking?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently cancel <strong>{booking.carName}</strong> booking and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleCancelBooking} slot="close" variant="danger">
                                Cancel Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}