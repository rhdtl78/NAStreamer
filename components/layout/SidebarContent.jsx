import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import Link from 'next/link'

const SidebarContent = props => {
  return (
    <div>
      <Navbar className="bg-primary">
        <NavbarBrand>
          <Link href="/">
            <span className="text-white">NAStreamer</span>
          </Link>
        </NavbarBrand>
      </Navbar>
      <Nav vertical>
        <NavItem className="p-2">
          <Link href="/video">To Videos</Link>
        </NavItem>
        <NavItem className="p-2">
          <Link href="#">SideLink</Link>
        </NavItem>
        <NavItem className="p-2">
          <Link href="#">SideLink</Link>
        </NavItem>
        <NavItem className="p-2">
          <Link href="#">SideLink</Link>
        </NavItem>
        <NavItem className="p-2">
          <Link href="#">SideLink</Link>
        </NavItem>
        <NavItem className="p-2">
          <Link href="#">SideLink</Link>
        </NavItem>
      </Nav>
    </div>
  )
}

SidebarContent.defaultProps = {
  userName: 'Guest'
}

export default SidebarContent
