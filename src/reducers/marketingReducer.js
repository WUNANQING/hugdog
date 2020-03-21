export const getCoupons = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_COUPON':
      return action.data
    default:
      return state
  }
}

export const insertCoupon = (state = [], action) => {
  switch (action.type) {
    case 'INSERT_COUPON':
      return action.data
    default:
      return state
  }
}
