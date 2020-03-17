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

const rootReducer = combineReducers({ counter, getProduct })

export { rootReducer }
