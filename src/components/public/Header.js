import React from 'react'

import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from 'react-bootstrap'
import { ReactComponent as Logo } from '../../images/logo-dark.svg'
import { FiSearch, FiHeart } from 'react-icons/fi'
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai'
import { IconContext } from 'react-icons'

function Header(props) {
  return (
    <>
      <Navbar bg="light" variant="light" className="py-3">
        <Navbar.Brand href="#home">
          <Logo className="App-logo" alt="logo" />
        </Navbar.Brand>
        <Nav className="mr-auto nav-menu">
          <Nav.Link href="#news">最新消息</Nav.Link>
          <Nav.Link href="#product">找商品</Nav.Link>
          <Nav.Link href="#service">找服務</Nav.Link>
          <Nav.Link href="#activities">找活動</Nav.Link>
          <Nav.Link href="#knowledges">找知識</Nav.Link>
          <Nav.Link href="#qa">常見Q&A</Nav.Link>
          <NavDropdown title="下拉選單" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">選單1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">選單2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">選單3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">選單4</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="nav-icon">
          <Nav.Link href="#">
            <IconContext.Provider value={{ size: '1.5rem' }}>
              <FiSearch />
            </IconContext.Provider>
          </Nav.Link>
          <Nav.Link href="#">
            <IconContext.Provider value={{ size: '1.5rem' }}>
              <AiOutlineUser />
            </IconContext.Provider>
          </Nav.Link>
          <Nav.Link href="#">
            <IconContext.Provider value={{ size: '1.5rem' }}>
              <FiHeart />
            </IconContext.Provider>
          </Nav.Link>
          <Nav.Link href="#">
            <IconContext.Provider value={{ size: '1.5rem' }}>
              <AiOutlineShopping />
            </IconContext.Provider>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default Header
