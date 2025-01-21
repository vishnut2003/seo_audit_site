'use client';

import { RiArrowDownSLine, RiUser3Line } from "@remixicon/react"
import DesktopMenu from "./DesktopMenu"
import { useState } from "react"
import LoginDropDown from "./LoginDropDown";

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
        <DesktopMenu/>

        {/* Login Button */}
        <div className="relative">
          <button 
            className="button-style-transperant flex items-center gap-1"
            onClick={() => setLoginDropDown(prev => !prev)}
          >
            <RiUser3Line size={19}/>
            <p>Login</p>
            <RiArrowDownSLine size={30} />
          </button>
          {loginDropDown && <LoginDropDown/>}
        </div>
      </div>
    </header>
  )
}

export default Header