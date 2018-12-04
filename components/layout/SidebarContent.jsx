import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import Link from 'next/link'
import {
  FaFileUpload,
  FaVideo,
  FaKey,
  FaCreativeCommonsBy
} from 'react-icons/fa'

const SidebarContent = props => {
  return (
    <div>
      <Navbar className="bg-light">
        <NavbarBrand>
          <Link href="/">
            <div className="sidebar_maintext">
              <span> NAStreamer</span>
            </div>
          </Link>
        </NavbarBrand>
      </Navbar>
      <Nav vertical>
        <NavItem className="login p-3">
          <Link href="/login">
            <a className="sidebar_text">
              <span className="sidebar_icon">
                <FaKey />
              </span>
              <span>Login</span>
            </a>
          </Link>
        </NavItem>
        <NavItem className="sign_up p-3">
          <Link prefetch href="/signup">
            <a className="sidebar_text">
              <span className="sidebar_icon">
                <FaCreativeCommonsBy />
              </span>
              <span>Sign Up</span>
            </a>
          </Link>
        </NavItem>
        <NavItem className="upload p-3">
          <Link href="/uploader">
            <a className="sidebar_text">
              <span className="sidebar_icon">
                <FaFileUpload />
              </span>
              <span>Upload</span>
            </a>
          </Link>
        </NavItem>
        <NavItem className="video p-3">
          <Link href="/video">
            <a className="sidebar_text">
              <span className="sidebar_icon">
                <FaVideo />
              </span>
              <span>Video</span>
            </a>
          </Link>
        </NavItem>
      </Nav>
      <style jsx>{`
        .sidebar_text {
          color: #000000;
          margin-left: 6px;
        }
        .sidebar_maintext {
          width: 230px;
        }
        .sidebar_icon {
          margin-right: 8px;
        }
      `}</style>
    </div>
  )
}

SidebarContent.defaultProps = {
  userName: 'Guest'
}

export default SidebarContent
