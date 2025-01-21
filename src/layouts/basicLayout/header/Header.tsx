import { RiArrowDownSLine } from "@remixicon/react"
import DesktopMenu from "./DesktopMenu"

const Header = () => {
  return (
    <header className="outer-wrapper border-b">
      <div className="inner-wrapper justify-between">
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-semibold">Logo</h2>
        </div>

        {/* Desktop menu */}
        <DesktopMenu/>

        {/* Login Button */}
        <div>
          <button className="button-style-primary flex items-center gap-1">
            <p>Login</p>
            <RiArrowDownSLine size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header