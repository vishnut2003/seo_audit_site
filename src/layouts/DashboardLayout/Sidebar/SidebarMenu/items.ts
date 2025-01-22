import { RiAlignItemBottomLine, RiBillLine, RiDashboardLine, RiLockPasswordLine, RiSettings4Line } from "@remixicon/react";

const sidebarMenuItems = [
    {
        name: 'My Account',
        icon: RiDashboardLine,
        link: '/my-account'
    },
    {
        name: 'Account Settings',
        icon: RiSettings4Line,
        link: '/my-account/account-settings'
    },
    {
        name: 'Reset Password',
        icon: RiLockPasswordLine,
        link: '/my-account/reset-password'
    },
    {
        name: 'Billing & Payments',
        icon: RiBillLine,
        link: '/my-account/billing'
    },
    {
        name: 'Access Tool',
        icon: RiAlignItemBottomLine,
        link: '/dashboard/billing'
    }
]

export default sidebarMenuItems;