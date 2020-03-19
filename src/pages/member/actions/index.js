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
    dispatch(showMember(data.member))
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
