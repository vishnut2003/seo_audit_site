import { ReactNode } from "react"
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"

const DashboardLayout = ({children, pageTitle}: Readonly<{
  children: ReactNode,
  pageTitle: string,
}>) => {
  return (
    <div className="w-full h-[100dvh] flex bg-gray-100">
        {/* Basic Layout Sidebar */}
        <Sidebar/>
        
        {/* Basic Laout Content */}
        <div className="w-full h-full flex flex-col">
          
          {/* Header of basic layout */}
          <Header pageTitle={pageTitle}/>
          <div className="w-full h-full min-h-0 overflow-y-auto p-5 flex justify-center">

            {/* Page Content */}
            <div className="w-full max-w-screen-2xl h-full">
            {children}
            </div>
          </div>
        </div>
    </div>
  )
}

export default DashboardLayout;