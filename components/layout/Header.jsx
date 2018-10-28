import PropTypes from 'prop-types'
import { Navbar, NavbarBrand } from 'reactstrap'
import Link from 'next/link'
import { MdReorder } from 'react-icons/md'
const Header = props => {
  return (
    <Navbar color="primary">
      <NavbarBrand>
        <Link href="/">
          <span style={{ color: '#fff' }}>Nastreamer</span>
        </Link>
      </NavbarBrand>
      <MdReorder className="ml-auto" />
    </Navbar>
  )
}
export default Header
