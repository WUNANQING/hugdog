import { combineReducers } from 'redux'
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
//商品列表和商品細節
const getProduct = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_PRODUCT':
      return action.data
    case 'SHOW_PRODUCT_DETAIL':
      return action.data
    default:
      return state
  }
}
//購物車列表
const intoCart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return action.data
    default:
      return state
  }
}

const rootReducer = combineReducers({ counter, getProduct, intoCart })

export { rootReducer }
