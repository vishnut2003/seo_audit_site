'use client';

import EmailUpdate from '@/components/myAccount/accoountSettings/EmailUpdate';
import NameUpdate from '@/components/myAccount/accoountSettings/NameUpdate';
import ResetPassword from '@/components/myAccount/accoountSettings/ResetPassword';
import DashboardLayout from '@/layouts/DashboardLayout/layout';

function AccountSettings() {

    return (
        <DashboardLayout
            pageTitle='Account Settings'
        >
            {/* main wrapper */}
            <div
                className='space-y-4 max-w-screen-lg'
            >

                {/* Section heading */}
                <div>
                    <h2
                        className='text-xl font-extrabold'
                    >Account Details</h2>
                    <p
                        className='opacity-70 font-normal text-sm'
                    >You can change your account details here.</p>
                </div>

                <NameUpdate />
                <EmailUpdate/>

                {/* Password Reset Section heading */}
                <div>
                    <h2
                        className='text-xl font-extrabold'
                    >Reset Password</h2>
                    <p
                        className='opacity-70 font-normal text-sm'
                    >You can reset your account password here.</p>
                </div>

                <ResetPassword/>
            </div>
        </DashboardLayout>
    )
}

export default AccountSettings