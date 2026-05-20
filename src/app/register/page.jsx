'use client'
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { cinzel } from '../fonts';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

const RegisterPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image: userData.image,
            callbackURL: '/'
        })

        if (data) {
            alert('Account Created Successfully. Please Log In.')
            redirect('/')
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
            <h1 className={`${cinzel.className} mb-2 font-bold text-center text-3xl`}>Create Account</h1>
            <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="name"
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter Your Name" />
                    <FieldError />
                </TextField>
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
                    name="image"
                >
                    <Label>Image URL</Label>
                    <Input placeholder="Enter Your Image URL" />
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
                    <Input placeholder="Enter Your Password" />
                    <Description>Must be at least 6 characters with 1 uppercase</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit" className={'w-full rounded-sm'}>
                        Create Account
                    </Button>
                </div>
                <div className="flex items-center gap-3">
                    <hr className="flex-1 border-gray-300" />

                    <span className="text-sm text-gray-500">Or Continue With</span>

                    <hr className="flex-1 border-gray-300" />
                </div>
                <Button variant="outline" className={'flex items-center rounded-sm w-full'} onClick={handleGoogleLogin}><FaGoogle /> Log In With Google</Button>
                <p className="text-center">Already Have Account? <Link href={'/login'} className="text-blue-500 font-semibold">LogIn</Link></p>
            </Form>
        </Card>
    );
};

export default RegisterPage;