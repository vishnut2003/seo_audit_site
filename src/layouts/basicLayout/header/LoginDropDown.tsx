import Link from 'next/link'
import React from 'react'

const LoginDropDown = () => {

    return (
        <div className='absolute z-40 top-12 right-0 bg-background drop-shadow-2xl rounded-md w-max max-w-[340px] before:w-4 before:h-4 before:absolute before:right-4 before:-top-2 before:bg-background before:rotate-45'>
            {/* Registerd Users section */}
            <div className='flex flex-col gap-3 border-b p-6'>
                <p className='font-bold text-base'>Registered Users</p>
                <p className='text-sm'>Have an account? Login now.</p>
                <Link
                    className='text-accent1 hover:text-accent2 font-semibold underline text-sm'
                    href={'/auth'}
                >Login</Link>
            </div>
            
            {/* New Users section */}
            <div className='flex flex-col gap-3 border-b p-6'>
                <p className='font-bold text-base'>New User</p>
                <p className='text-sm'>New User? Create an account to get started today.</p>
                <Link
                    className='text-accent1 hover:text-accent2 font-semibold underline text-sm'
                    href={'/auth?form=register'}
                >Create an Account</Link>
            </div>
            
            {/* Other links section */}
            <div className='flex flex-col gap-3 border-b p-6'>
                <Link
                    className='text-accent1 hover:text-accent2 font-semibold underline text-sm'
                    href={'#'}
                >Go to Dashboard</Link>
                
                <Link
                    className='text-accent1 hover:text-accent2 font-semibold underline text-sm'
                    href={'#'}
                >Forget Password?</Link>
                
                <Link
                    className='text-accent1 hover:text-accent2 font-semibold underline text-sm'
                    href={'#'}
                >Support</Link>
            </div>
        </div>
    )
}

export default LoginDropDown