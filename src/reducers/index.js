import { combineReducers } from 'redux'
import { getCoupons } from './marketingReducer'

// 會員reducers
const getMember = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_MEMBER':
      return action.data
    default:
      return state
  }
}
//會員reducers

//商品reducers
//商品數量
const counter = (state = 1, action) => {
  switch (action.type) {
    case 'PLUS_QUANTITY':
      return state + action.quantity
    case 'MINUS_QUANTITY':
      return state === 1 ? state : state - action.quantity
    default:
      return state
  }
}
//商品列表
const getProducts = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_PRODUCTS':
      return action.data
    default:
      return state
  }
}

//商品細節
const getProductDetail = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_PRODUCT_DETAIL':
      return action.data
    default:
      return state
  }
}
//商品reducers

const getDog = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_DOG': {
      console.log(action.data)
      return action.data
    }

    default:
      return state
  }
}
const rootReducer = combineReducers({
  getMember,
  counter,
  getProducts,
  getProductDetail,
  getDog,
  getCoupons,
})

export { rootReducer }
