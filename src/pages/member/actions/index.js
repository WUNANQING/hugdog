export const showMember = data => {
  return { type: 'SHOW_MEMBER', data }
}
export const showDog = data => {
  return { type: 'SHOW_DOG', data }
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
    dispatch(showMember(data.member))
  }
}
export const getDogData = () => {
  return async dispatch => {
    const req = new Request(`http://localhost:6001/dog/`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    console.log(data.dog)
    dispatch(showDog(data.dog))
  }
}
// export const getMemberData = mId => {
//   return async dispatch => {
//     const req = new Request(`http://localhost:6001/member/${mId}`, {
//       method: 'GET',
//       credentials: 'include',
//     })
//     const res = await fetch(req)
//     const data = await res.json()
//     // console.log(data.member)
//     dispatch(showMember(data.member))
//   }
// }
