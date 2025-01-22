import GridMyAccountItems from '@/components/myAccount/GridMyAccountItems'
import DashboardLayout from '@/layouts/DashboardLayout/layout'
import React from 'react'

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h2
        className='text-3xl font-black mb-5'
      >My Account</h2>
      <GridMyAccountItems />
    </DashboardLayout>
  )
}

export default Dashboard