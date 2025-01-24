'use client';

import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

const SidebarLogo = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    getSession().then((session) => {
      const userName = session?.user?.name || '';
      setName(userName);
    })
  }, [])

  return (
    <div className="w-full py-5 px-6">
        <h2 className="font-bold text-xl">Hello {name} <span role="img" aria-label="dog">👋</span></h2>
        <p className="text-sm opacity-80">Welcome to SEO Audit Tool</p>
    </div>
  )
}

export default SidebarLogo