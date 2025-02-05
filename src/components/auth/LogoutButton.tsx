'use client';

import { RiLogoutBoxRLine } from '@remixicon/react'
import { signOut } from "next-auth/react"
import React from 'react'

const LogoutButton = ({ iconType, className }: {
    iconType: boolean,
    className: string
}) => {
    return (
        <button
            className={`${className} min-w-max`}
            onClick={() => signOut()}
        >
            {iconType && <RiLogoutBoxRLine size={24} />}
            <p className='whitespace-nowrap font-semibold'>Logout</p>
        </button>
    )
}

export default LogoutButton