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

// export const insertCoupon = (userData, callback) => {
//   return async dispatch => {
//     const request = new Request(
//       'http://localhost:5500/member/?:memberaccount=' + userData.username,
//       {
//         method: 'GET',
//         headers: new Headers({
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         }),
//       }
//     )

//     console.log(JSON.stringify(userData))

//     const response = await fetch(request)
//     const data = await response.json()
//     console.log('res data', data)
//     if (data != false) {
//       localStorage.setItem('userdata', JSON.stringify(userData))
//     }

//     if (data.length > 0) {
//       if (
//         data[36].Account === userData.username &&
//         data[36].Pwd === userData.password
//       ) {
//         console.log(data)
//         // 設定資料
//         dispatch(userLogin(userData))
//         window.location = 'http://localhost:3000/memberedit'
//         //如果之後會員登入應該是以會員編輯資料網址為主http://localhost:3000/memberedit/:memberaccount
//         // alert(`${userData.username}登入成功`)
//         console.log('登入成功')
//       } else {
//         alert('密碼錯誤')
//       }
//     } else {
//       alert('沒有這個帳號')
//     }
//   }
// }
