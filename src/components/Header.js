import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../images/logo-dark.svg'
// import { FiSearch, FiHeart } from 'react-icons/fi'
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai'
import { FaDog } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { withRouter } from 'react-router-dom'

function Header(props) {
  return (
    <>
      <header className="sticky-top">
        <Navbar bg="white" variant="light" expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav order-1" />
          <Navbar.Brand href="/" className="mx-auto ml-md-0 mr-md-5 order-2">
            <Logo className="App-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="order-4 order-md-3">
            <Nav className="mr-auto nav-menu">
              <Nav.Link href="#news">最新消息</Nav.Link>
              <Nav.Link>
                <Link to="/products">找商品</Link>
              </Nav.Link>
              <NavDropdown title="找服務" id="basic-nav-dropdown">
                <NavDropdown.Item href="/service/">
                  什麼是保母服務
                </NavDropdown.Item>
                <NavDropdown.Item href="/service/query/">
                  尋找狗狗保母
                </NavDropdown.Item>
                <NavDropdown.Item href="/service/detail/m001">
                  測試-保母內頁
                </NavDropdown.Item>
                <NavDropdown.Item href="/service/message/m001">
                  測試-聯繫保母
                </NavDropdown.Item>
                <NavDropdown.Item href="/service/booking/order001">
                  測試-預約保母表單
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/service/apply/">
                  成為狗狗保母
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/activity">找活動</Nav.Link>
              <NavDropdown title="找知識">
                <NavDropdown.Item href="/knowledge/blog">
                  找文章
                </NavDropdown.Item>
                <NavDropdown.Item href="/knowledge/partner">
                  找夥伴
                </NavDropdown.Item>
                <NavDropdown.Item href="/knowledge/question">
                  找答案
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#qa">常見Q&A</Nav.Link>
              <Nav.Link href="/coupon">Test Coupon</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="nav-icon order-3 order-md-4">
            <div className="nav-link">
              <div className="icon icon-unread">
                <IconContext.Provider value={{ size: '1.5rem' }}>
                  <FaDog />
                </IconContext.Provider>
              </div>
              <div className="dropdown-menu">
                <div className="dropdown-item text-center">OOO 您好</div>
                <div className="dropdown-divider" role="separator"></div>
                <Link to="/service/admin/" className="dropdown-item nav-link">
                  主頁
                </Link>
                <Link
                  to="/service/admin/profile/"
                  className="dropdown-item nav-link"
                >
                  資料修改
                </Link>
                <Link
                  to="/service/admin/order/"
                  className="dropdown-item nav-link"
                >
                  訂單查詢
                </Link>
                <Link
                  to="/service/admin/message/"
                  className="dropdown-item nav-link"
                >
                  訊息<span className="badge badge-danger">1</span>
                </Link>
              </div>
            </div>
            <div className="nav-link">
              <IconContext.Provider value={{ size: '1.5rem' }}>
                <AiOutlineUser />
              </IconContext.Provider>
              <div className="dropdown-menu">
                <Link to="/login" className="dropdown-item nav-link">
                  登入
                </Link>
                <Link to="/member" className="dropdown-item nav-link">
                  會員頁測試
                </Link>
                <div className="dropdown-divider" role="separator"></div>
                <Link to="#" className="dropdown-item nav-link">
                  連結3
                </Link>
              </div>
            </div>
            {/* <Nav.Link href="#">
              <IconContext.Provider value={{ size: '1.5rem' }}>
                <FiHeart />
              </IconContext.Provider>
            </Nav.Link> */}

            {/* Nav.Link不會記錄router的三個屬性 export default withRouter(Header)*/}
            <Nav.Link
              href="#"
              onClick={() => {
                props.history.push('/cart')
              }}
            >
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

export default withRouter(Header)
