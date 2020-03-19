import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import Breadcrumb from '../../components/Breadcrumbs'
import ProductSidebar from './components/ProductSidebar'
import ProductCard from './components/ProductCard'
import { Container, Row, Col, Pagination } from 'react-bootstrap'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getProducts } from './actions/index'

const Products = props => {
  //console.log(props.list)確認是否抓到store的reducers回傳的狀態

  useEffect(() => {
    props.getProducts()
  }, [])

  let sort = (
    <div className="d-md-flex justify-content-md-between align-items-center">
      <span>共有250項商品</span>
      <select>
        <option>依上架時間(近期-早期)</option>
        <option>依上架時間(早期-近期)</option>
        <option>依價格高低(高價-低價)</option>
        <option>依價格高低(低價-高價)</option>
      </select>
    </div>
  )
  //分頁顯示
  let items = []
  for (let number = 1; number <= props.list.length; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>)
  }
  const paginationBasic = (
    <Pagination className="d-flex justify-content-center" size="md">
      {items}
    </Pagination>
  )

  return (
    <Container>
      <Row className="my-5">
        <ProductSidebar />
        <Col className="pl-5">
          <Breadcrumb />
          {sort}
          <Row>
            {props.list &&
              props.list.map((value, index) => {
                return <ProductCard key={index} data={props.list[index]} />
              })}
          </Row>
          {paginationBasic}
        </Col>
      </Row>
    </Container>
  )
}

//選擇對應的reducer，將其狀態淺拷貝到此元件的props
const mapStateToProps = store => {
  return { list: store.getProducts }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getProducts }, dispatch)
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Products)
)
