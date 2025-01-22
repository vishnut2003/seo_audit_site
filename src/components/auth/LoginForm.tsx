import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RiEyeLine } from '@remixicon/react'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'

const LoginForm = () => {
    return (
        <form className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                    id="email"
                    placeholder="Enter Email Address"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className='relative'>
                    <Input
                        id="password"
                        placeholder="Enter Password"
                    />

                    <button className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400'>
                        <RiEyeLine size={20}/>
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