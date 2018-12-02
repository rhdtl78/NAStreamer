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
            <span className="sidebar_text">NAStreamer</span>
          </Link>
        </NavbarBrand>
      </Navbar>
      <Nav vertical>
        <NavItem className="login p-2">
          <Link href="/login">
            <a className="sidebar_text">
              <span>
                <FaKey /> Login
              </span>
            </a>
          </Link>
        </NavItem>
        <NavItem className="sign_up p-2">
          <Link prefetch href="/signup p-2">
            <a className="sidebar_text">
              <span>
                <FaCreativeCommonsBy /> Sign Up
              </span>
            </a>
          </Link>
        </NavItem>
        <NavItem className="upload p-2">
          <Link href="/uploader">
            <a className="sidebar_text">
              <span>
                <FaFileUpload /> Upload
              </span>
            </a>
          </Link>
        </NavItem>
        <NavItem className="video p-2">
          <Link href="/video">
            <a className="sidebar_text">
              <span>
                <FaVideo /> Video
              </span>
            </a>
          </Link>
        </NavItem>
      </Nav>
      <style jsx>{`
        .sidebar_text {
          color: #000000;
        }
      `}</style>
    </div>
  )
}

SidebarContent.defaultProps = {
  userName: 'Guest'
}

export default SidebarContent
