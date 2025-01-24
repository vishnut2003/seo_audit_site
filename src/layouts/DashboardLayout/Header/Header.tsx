import MobileSidebar from "../MobileSidebar/MobileSidebar"

const Header = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <header className="min-h-0 py-6 px-7 flex flex-nowrap items-center gap-4">
      <MobileSidebar />

      {/* page title */}
      <h2
        className="text-2xl font-black"
      >{pageTitle}</h2>
    </header>
  )
}

export default Header