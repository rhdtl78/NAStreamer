import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import Link from 'next/link'
import {
  FaFileUpload,
  FaVideo,
  FaKey,
  FaCreativeCommonsBy
} from 'react-icons/fa'

const SidebarSet = props => (
  <div>
    <a className="Sidebar__text">
      <span className="Sidebar__icon">{props.icon}</span>
      <span>{props.name}</span>
    </a>
    <style jsx>{`
      .Sidebar__text {
        color: #000000;
        margin-left: 6px;
      }
      .Sidebar__icon {
        margin-right: 8px;
      }
    `}</style>
  </div>
)

const SidebarContent = props => {
  return (
    <div>
      <Navbar className="bg-light">
        <NavbarBrand>
          <Link href="/">
            <div className="Sidebar__maintext">
              <span> NAStreamer</span>
            </div>
          </Link>
        </NavbarBrand>
      </Navbar>
      <Nav vertical>
        <NavItem className="login p-3">
          <Link href="/login">
            <SidebarSet icon={<FaKey />} name="Login" />
          </Link>
        </NavItem>
        <NavItem className="sign_up p-3">
          <Link prefetch href="/signup">
            <SidebarSet icon={<FaCreativeCommonsBy />} name="Sign Up" />
          </Link>
        </NavItem>
        <NavItem className="upload p-3">
          <Link href="/uploader">
            <SidebarSet icon={<FaFileUpload />} name="Upload" />
          </Link>
        </NavItem>
        <NavItem className="video p-3">
          <Link href="/video">
            <SidebarSet icon={<FaVideo />} name="Video" />
          </Link>
        </NavItem>
      </Nav>
      <style jsx>
        {`
          .Sidebar__maintext {
            width: 230px;
          }
        `}
      </style>
    </div>
  )
}

SidebarContent.defaultProps = {
  userName: 'Guest'
}

export default SidebarContent
