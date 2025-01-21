import { ReactNode } from 'react'
import Header from './header/Header'

const Basiclayout = ({children}: Readonly<{
  children: ReactNode,
}>) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default Basiclayout