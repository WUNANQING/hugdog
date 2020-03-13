import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { ReactComponent as Logo } from '../images/logo-dark.svg'
// import { FiSearch, FiHeart } from 'react-icons/fi'
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai'
import { IconContext } from 'react-icons'

function Header(props) {
  return (
    <>
      <header class="border-bottom">
        <Navbar bg="white" variant="light" expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav order-1" />
          <Navbar.Brand href="/" className="mx-auto ml-md-0 mr-md-5 order-2">
            <Logo className="App-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="order-4 order-md-3">
            <Nav className="mr-auto nav-menu">
              <Nav.Link href="#news">最新消息</Nav.Link>
              <Nav.Link href="productlist">找商品</Nav.Link>
              <Nav.Link href="/service/query">找服務</Nav.Link>
              <Nav.Link href="#activities">找活動</Nav.Link>
              <Nav.Link href="/blog">找知識</Nav.Link>
              <Nav.Link href="#qa">常見Q&A</Nav.Link>
              {/* <NavDropdown title="下拉選單" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">選單1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">選單2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">選單3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">選單4</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          <Nav className="nav-icon order-3 order-md-4">
            {/* <Nav.Link href="#">
              <IconContext.Provider value={{ size: '1.5rem' }}>
                <FiSearch />
              </IconContext.Provider>
            </Nav.Link> */}
            <Nav.Link href="/member">
              <IconContext.Provider value={{ size: '1.5rem' }}>
                <AiOutlineUser />
              </IconContext.Provider>
            </Nav.Link>
            {/* <Nav.Link href="#">
              <IconContext.Provider value={{ size: '1.5rem' }}>
                <FiHeart />
              </IconContext.Provider>
            </Nav.Link> */}
            <Nav.Link href="/cart">
              <IconContext.Provider value={{ size: '1.5rem' }}>
                <AiOutlineShopping />
              </IconContext.Provider>
            </Nav.Link>
          </Nav>
        </Navbar>
      </header>
    </>
  )
}

export default Header
