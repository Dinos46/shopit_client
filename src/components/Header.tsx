const Header = () => {
  return (
    <header className="header">
      <h1 className="text-2xl">ShopIt</h1>
      <ul className="flex font-normal">
        <li>home</li>
        <li className="mx-5">about</li>
        <li>store</li>
      </ul>
      <div className="flex font-normal">
        <div className="mr-3">user panel</div>
        <div>cart</div>
      </div>
    </header>
  )
}

export default Header
