'use client';

import { RiLogoutBoxRLine } from '@remixicon/react'
import React from 'react'

const LogoutButton = ({iconType, className}: {
    iconType: boolean,
    className: string
}) => {
    return (
        <button 
        className={`${className} min-w-max`}>
            { iconType && <RiLogoutBoxRLine size={24} /> }
            <p className='whitespace-nowrap'>Logout</p>
        </button>
    )
}

export default LogoutButton