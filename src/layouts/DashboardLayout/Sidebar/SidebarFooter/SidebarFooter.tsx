import LogoutButton from "@/components/auth/LogoutButton"
import footerMenuItems from "./FooterMenuItems"
import SingleMenuItem from "./SingleMenuItem"

const SidebarFooter = () => {
  return (
    <div className="w-full py-5 px-6 border-t border-white/10">

      {/* Logout button */
        footerMenuItems.map((menuItem, index) => (
          <SingleMenuItem key={index} menuItem={menuItem} />
        ))
      }
      <LogoutButton 
        iconType={true} 
        className="flex gap-2 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 w-full"
      />

    </div>
  )
}

export default SidebarFooter