import Link from 'next/link'
import { MdReorder } from 'react-icons/md'
import { Navbar, NavbarBrand } from 'reactstrap'
const Header = props => {
  const handleOpen = () => {
    props.handleOpen(true)
  }
  return (
    <Navbar color="primary">
      <NavbarBrand>
        <Link href="/">
          <span style={{ color: '#fff' }}>Nastreamer</span>
        </Link>
      </NavbarBrand>
      <MdReorder className="ml-auto" onClick={handleOpen} />
    </Navbar>
  )
}
export default Header
