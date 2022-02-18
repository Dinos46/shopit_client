import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import ScrollTop from './ScrollTop'

const Layout: React.FC<ReactNode> = ({ children }) => {
  return (
    <div className="relative mx-auto max-w-5xl">
      <Header />
      <ScrollTop />
      <main className="">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
