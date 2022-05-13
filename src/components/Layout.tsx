import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header/Header'
import ScrollTop from './ScrollTop'

const Layout: React.FC<ReactNode> = ({ children }) => {
  return (
    <div className=" h-full">
      <Header />
      <ScrollTop />
      <main className="m-auto min-h-[100vh] max-w-6xl">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
