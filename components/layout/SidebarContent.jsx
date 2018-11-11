import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import Link from 'next/link'

const SidebarContent = props => {
  return (
    <div>
      <Navbar className="bg-light">
        <NavbarBrand>
          <Link href="/">
            <span className="text-dark">NAStreamer</span>
          </Link>
        </NavbarBrand>
      </Navbar>
      <Nav vertical>
        <NavItem className="p-2">
          <Link prefetch href="/video?category=all">
            <a className="text-dark">To Videos</a>
          </Link>
        </NavItem>
        <NavItem className="p-2">
          <Link href="#">
            <a className="text-dark">SideLink</a>
          </Link>
        </NavItem>
        <NavItem className="p-2">
          <Link href="#">
            <a className="text-dark">SideLink</a>
          </Link>
        </NavItem>
        <NavItem className="p-2">
          <Link href="#">
            <a className="text-dark">SideLink</a>
          </Link>
        </NavItem>
        <NavItem className="p-2">
          <Link href="#">
            <a className="text-dark">SideLink</a>
          </Link>
        </NavItem>
        <NavItem className="p-2">
          <Link href="#">
            <a className="text-dark">SideLink</a>
          </Link>
        </NavItem>
      </Nav>
    </div>
  )
}

SidebarContent.defaultProps = {
  userName: 'Guest'
}

export default SidebarContent
