import NameUpdate from '@/components/myAccount/accoountSettings/NameUpdate';
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
                    className='opacity-60'
                >You can change your account details here.</p>
            </div>

            <NameUpdate/>
        </div>
    </DashboardLayout>
  )
}

export default AccountSettings