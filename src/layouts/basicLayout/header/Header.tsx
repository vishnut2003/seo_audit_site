'use client';

import { RiArrowDownSLine, RiUser3Line } from "@remixicon/react"
import DesktopMenu from "./DesktopMenu"
import { useState } from "react"
import LoginDropDown from "./LoginDropDown";
import MobileMenu from "./MobileMenu";

const Header = () => {

  const [loginDropDown, setLoginDropDown] = useState(false);

  return (
    <header className="outer-wrapper py-4 border-b">
      <div className="inner-wrapper justify-between">
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-black">Logo</h2>
        </div>

        {/* Desktop menu */}
        <div className="md:flex hidden">
          <DesktopMenu />
        </div>

        {/* Login Button */}
        <div className="relative flex gap-4 items-center">
          <button
            className="button-style-transperant flex items-center gap-1"
            onClick={() => setLoginDropDown(prev => !prev)}
          >
            <RiUser3Line size={19} />
            <p>Login</p>
            <RiArrowDownSLine size={30} />
          </button>
          {loginDropDown && <LoginDropDown />}

          {/* Mobile menu */}
          <div className="md:hidden flex">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header