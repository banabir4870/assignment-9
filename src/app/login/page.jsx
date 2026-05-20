'use client'
import { Button, Card, Checkbox, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { cinzel } from '../fonts';
import { FaGoogle } from 'react-icons/fa6';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

const LogInPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            callbackURL: '/'
        })

        if (data) {
            alert('LogIn Successfully.')
        }
        if (error) {
            alert(`${error.message}`)
        }
    };

    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <Card className='w-1/4 mx-auto my-10'>
            <h1 className={`${cinzel.className} mb-2 font-bold text-center text-3xl`}>Welcome Back</h1>
            <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="Enter Your Email" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 6) {
                            return "Password must be at least 6 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 6 characters with 1 uppercase</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit" className={'w-full rounded-sm'}>
                        LogIn
                    </Button>
                </div>
                <div className="flex items-center gap-3">
                    <hr className="flex-1 border-gray-300" />

                    <span className="text-sm text-gray-500">Or Continue With</span>

                    <hr className="flex-1 border-gray-300" />
                </div>
                <Button variant="outline" className={'flex items-center rounded-sm w-full'} onClick={handleGoogleLogin}><FaGoogle /> Log In With Google</Button>
                <p className="text-center">Don&apos;t Have An Account? <Link href={'/register'} className="text-blue-500 font-semibold">Register</Link></p>
            </Form>
        </Card>
    );
};

export default LogInPage;