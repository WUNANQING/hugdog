export const showCoupons = data => {
  return { type: 'SHOW_COUPON', data }
}
//跟node要資料
export const formServerCoupons = mmId => {
  return async dispatch => {
    const request = new Request(
      `http://localhost:6001/marketing_member/mmId/${mmId}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    const res = await fetch(request)
    const data = await res.json()

    console.log('GBM', data)
    dispatch(showCoupons(data))
  }
}
export const formServerCouponsWE = used => {
  return async dispatch => {
    const request = new Request(
      `http://localhost:6001/marketing_member/used/${used}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    const res = await fetch(request)
    const data = await res.json()

    console.log('GBM', data)
    dispatch(showCoupons(data))
  }
}
