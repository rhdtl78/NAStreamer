import PropTypes from 'prop-types'
import { Navbar, NavbarBrand } from 'reactstrap'
import Link from 'next/link'
import { MdReorder } from 'react-icons/md'
const Header = props => {
  const handleOpen = () => {
    props.handleOpen(true)
  }
  return (
    <div>
      <Navbar color="light" className="Header" light>
        <NavbarBrand>
          <Link href="/">
            <span>Nastreamer</span>
          </Link>
        </NavbarBrand>
        <MdReorder className="ml-auto" onClick={handleOpen} />
      </Navbar>
      <style jsx>{`
        .Header {
          border-bottom: 1px solid rgb(231, 232, 239);
        }
      `}</style>
    </div>
  )
}
export default Header
