import { combineReducers } from 'redux'
import {
  getCoupons,
  insertCoupon,
  getCode,
  CheckCoupon,
} from './marketingReducer'

// 會員reducers
const getMember = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_MEMBER':
      return action.data
    default:
      return state
  }
}
// 會員訂單reducers
const getMemberOrder = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_MEMBER_ORDER':
      return action.data
    default:
      return state
  }
}
const getMemberOrderDetail = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_MEMBER_ORDER_DETAIL':
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
const getDogDetail = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_DOG_DETAIL':
      return action.data
    default:
      return state
  }
}

const getQuantity = (state = 0, action) => {
  switch (action.type) {
    case 'COUNT_QUANTITY':
      return action.quantity
    default:
      return state
  }
}
//knowledge reducers
//blog

const getBlog = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_BLOG':
      return action.data
    default:
      return state
  }
}

const getBlogArticle = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_BLOG_ARTICLE':
      return action.data
    default:
      return state
  }
}
// partner
const getPartner = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_PARTNER':
      return action.data
    default:
      return state
  }
}

const getPartnerDetail = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_PARTNER_DETAIL':
      return action.data
    default:
      return state
  }
}

// Qestion
const getQuestion = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_QUESTION':
      return action.data
    default:
      return state
  }
}

const getQuestionDetail = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_QUESTION_DETAIL':
      return action.data
    default:
      return state
  }
}

//knowledge end
const rootReducer = combineReducers({
  getMember,
  counter,
  CheckCoupon,
  getProducts,
  getProductDetail,
  getDog,
  getCoupons,
  getBlog,
  getBlogArticle,
  getPartner,
  getPartnerDetail,
  getQuestion,
  getQuestionDetail,
  insertCoupon,
  getMemberOrder,
  getMemberOrderDetail,
  getCode,
  getDogDetail,
  getQuantity,
})

export { rootReducer }
