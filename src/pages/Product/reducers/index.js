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
<<<<<<< HEAD
const getProduct = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_PRODUCT':
=======
//商品列表
const getProducts = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_PRODUCTS':
>>>>>>> 7c189a2f189ff98cbc977b25f4a1973f2c81e303
      return action.data
    default:
      return state
  }
}
<<<<<<< HEAD

const rootReducer = combineReducers({ counter, getProduct })
=======
//商品細節
const getProductDetail = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_PRODUCT_DETAIL':
      return action.data
    default:
      return state
  }
}
//購物車列表先不用
// const saveProductToCart = (state = {}, action) => {
//   switch (action.type) {
//     case 'SAVE_SIZE':
//       return {
//         ...state, //size:['pId',size]
//         [action.size[0]]: { ...state[action.size[0]], size: action.size[1] }, //=={['pId']:{pId:'pId',size:'size'}}
//       }
//     case 'SAVE_COLOR':
//       return {
//         ...state,
//         [action.color[0]]: {
//           ...state[action.color[0]],
//           color: action.color[1], //==color:['pId',color]
//         },
//       }
//     case 'SAVE_QTY':
//       return {
//         ...state,
//         [action.qty[0]]: { ...state[action.qty[0]], qty: action.qty[1] }, //==qty:['pId',qty]
//       }
//     case 'SAVE_PRODUCT':
//       return {
//         //==product:['pId','pName','total',true]
//         // == {['pId']:{pId;'pId', pName:'pName', qty:'qty', isAddcart: true}}
//         ...state,
//         [action.product[0]]: {
//           ...state[action.product[0]],
//           pName: action.product[1],
//           pPrice: action.product[2],
//           qty: action.product[3],
//           isAddCart: action.product[4],
//         },
//       }
//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
  counter,
  getProducts,
  getProductDetail,
})
>>>>>>> 7c189a2f189ff98cbc977b25f4a1973f2c81e303

export { rootReducer }
