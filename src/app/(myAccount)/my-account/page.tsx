import GridMyAccountItems from '@/components/myAccount/GridMyAccountItems'
import DashboardLayout from '@/layouts/DashboardLayout/layout'
import React from 'react'

const Dashboard = () => {
  return (
    <DashboardLayout pageTitle='My Account'>
      <GridMyAccountItems />
    </DashboardLayout>
  )
}

export default Dashboard