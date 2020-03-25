export const showMember = data => {
  return { type: 'SHOW_MEMBER', data }
}

//跟node要資料
export const getMemberData = () => {
  return async dispatch => {
    const req = new Request(`http://localhost:6001/member/`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    // console.log(data.member)
    dispatch(showMember(data))
  }
}

//會員訂單資料
export const showMemberOrder = data => {
  return { type: 'SHOW_MEMBER_ORDER', data }
}

//跟node要資料
export const getMemberOrderData = () => {
  return async dispatch => {
    const req = new Request(`http://localhost:6001/member/order/`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    console.log(data)
    dispatch(showMemberOrder(data))
  }
}
//跟server要訂單細節
export const showMemberOrderDataDetail = data => {
  return { type: 'SHOW_MEMBER_ORDER_DETAIL', data }
}
export const getMemberOrderDataDetail = mId => {
  mId = localStorage.getItem('mId')
  console.log('mId: ', mId)
  return async dispatch => {
    const req = new Request(`http://localhost:6001/member/order/${mId}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    // console.log('detail', data)
    dispatch(showMemberOrderDataDetail(data))
  }
}

//查看會員細節
export const showMemberDetail = data => {
  return { type: 'SHOW_MEMBER_DETAIL', data }
}
export const getMemberDetail = mId => {
  return async dispatch => {
    const req = new Request(`http://localhost:6001/member/${mId}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    // console.log(data)
    dispatch(showMemberDetail(data))
  }
}
//查看狗狗
export const showDog = data => {
  return { type: 'SHOW_DOG', data }
}
export const getDogData = () => {
  return async dispatch => {
    const req = new Request(`http://localhost:6001/dog/`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    console.log(data)
    dispatch(showDog(data))
  }
}
//查看狗狗細節
export const showDogDetail = data => {
  return { type: 'SHOW_DOG_DETAIL', data }
}
export const getDogDetail = mId => {
  mId = localStorage.getItem('mId')
  return async dispatch => {
    const req = new Request(`http://localhost:6001/dog/${mId}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    console.log(data)
    dispatch(showDogDetail(data))
  }
}
