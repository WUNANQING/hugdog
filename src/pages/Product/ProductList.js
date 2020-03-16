import React, { useEffect } from 'react'
import Breadcrumb from '../../components/Breadcrumbs'
import ProductSidebar from './components/ProductSidebar'
import ProductCard from './components/ProductCard'
import { Row } from 'react-bootstrap'
import { FaPaw } from 'react-icons/fa'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { reqServerProductData } from './actions/index'

const ProductList = props => {
  useEffect(() => {
    props.reqServerProductData()
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

  return (
    <div className="container">
      <div className="row my-5">
        <ProductSidebar />
        <div className="col-10 pl-5">
          <Breadcrumb />
          {sort}
          <Row>
            {props.data.map((value, index) => {
              return <ProductCard key={index} data={props.data[index]} />
            })}
          </Row>
        </div>
      </div>
    </div>
  )
}

//選擇對應的reducer，將其狀態淺拷貝到此元件的props
const mapStateToProps = store => {
  return { data: store.getProducts }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ reqServerProductData }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
