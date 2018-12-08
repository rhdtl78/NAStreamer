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
    <Link href={props.sidelink}>
      <a className="Sidebar__text">
        <span className="Sidebar__icon">{props.icon}</span>
        <span>{props.name}</span>
      </a>
    </Link>
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
          <SidebarSet sidelink="/login" icon={<FaKey />} name="Login" />
        </NavItem>
        <NavItem className="sign_up p-3">
          <SidebarSet
            sidelink="/signup"
            icon={<FaCreativeCommonsBy />}
            name="Sign Up"
          />
        </NavItem>
        <NavItem className="upload p-3">
          <SidebarSet
            sidelink="/uploader"
            icon={<FaFileUpload />}
            name="Upload"
          />
        </NavItem>
        <NavItem className="video p-3">
          <SidebarSet sidelink="/video" icon={<FaVideo />} name="Video" />
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
