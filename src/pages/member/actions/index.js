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
    console.log(data)
    dispatch(showMemberDetail(data))
  }
}
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
export const showDogDetail = data => {
  return { type: 'SHOW_DOG_DETAIL', data }
}
export const getDogDetail = dId => {
  return async dispatch => {
    const req = new Request(`http://localhost:6001/dog/${dId}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    console.log(data)
    dispatch(showDogDetail(data))
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
