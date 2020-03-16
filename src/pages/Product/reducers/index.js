import { combineReducers } from 'redux'
//商品數量
const counter = (state = 1, action) => {
  switch (action.type) {
    case 'PLUS_QUANTITY':
      return state + action.quantity
    case 'MINUS_QUANTITY':
      return state === 1 ? state : state - action.quantity
    case 'ADDTO_CART':
      return state
    default:
      return state
  }
}
const getProducts = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_PRODUCTS':
      return action.data
    default:
      return state
  }
}

const rootReducer = combineReducers({ counter, getProducts })

export { rootReducer }
