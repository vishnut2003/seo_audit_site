import MobileSidebar from "../MobileSidebar/MobileSidebar"
import UserCard from "./UserCard"

const Header = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <header className="min-h-0 py-6 px-7 flex flex-nowrap justify-between items-center gap-4">
      <div className="flex justify-center items-center gap-3 md:gap-0">
        <MobileSidebar />

        {/* page title */}
        <h2
          className="md:text-2xl text-xl font-black"
        >{pageTitle}</h2>
      </div>

      {/* User card */}
      <UserCard/>
    </header>
  )
}

export default Header