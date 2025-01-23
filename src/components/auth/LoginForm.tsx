'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RiEyeLine, RiEyeOffLine } from '@remixicon/react'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'
import { signIn } from 'next-auth/react'
import { LoginFormEntryInterface } from '@/interfaces/user';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState<LoginFormEntryInterface>({
        email: '',
        password: '',
    })

    function handleOnchange (e: ChangeEvent<HTMLInputElement>) {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    async function _submitLoginForm (e: FormEvent) {
        e.preventDefault();
        await signIn('Login', {
            callbackUrl: '/my-account',
            ...formData,
        })
    }

    return (
        <form
            onSubmit={_submitLoginForm} 
            className="space-y-4"
        >
            <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                    id="email"
                    required
                    name='email'
                    value={formData.email}
                    onChange={handleOnchange}
                    placeholder="Enter Email Address"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className='relative'>
                    <Input
                        id="password"
                        required
                        type={showPassword ? "text" : "password"}
                        name='password'
                        value={formData.password}
                        onChange={handleOnchange}
                        placeholder="Enter Password"
                    />

                    <button 
                        type='button'
                        className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400'
                        onClick={() => setShowPassword(prev => !prev)}
                    >
                        {showPassword ? <RiEyeLine size={20}/> : <RiEyeOffLine size={20}/>}
                    </button>
                </div>
            </div>

            <div className=''>
                <div className='flex justify-start items-center gap-2'>
                    <Checkbox/>
                    <Label>Remember me</Label>
                </div>
            </div>

            <Button className='w-full py-5 bg-accent1 hover:bg-accent1'>
                SignIn
            </Button>
        </form>
    )
}

export default LoginForm