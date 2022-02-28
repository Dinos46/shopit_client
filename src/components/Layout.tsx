import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import ScrollTop from './ScrollTop'

const Layout: React.FC<ReactNode> = ({ children }) => {
  return (
    <div className=" ">
      <Header />
      <ScrollTop />
      <main className="m-auto h-full max-w-6xl">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
