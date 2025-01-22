import LogoutButton from "@/components/auth/LogoutButton"
import footerMenuItems from "./FooterMenuItems"
import SingleMenuItem from "./SingleMenuItem"

const SidebarFooter = () => {
  return (
    <div className="w-full py-5 px-6 border-t border-white/10">

      <LogoutButton iconType={true} className="flex gap-2 opacity-95 py-3 px-4 rounded-lg hover:bg-white/10 w-full"/>

    </div>
  )
}

export default SidebarFooter