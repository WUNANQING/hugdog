//文章
export const showBlog = data => {
  return { type: 'SHOW_BLOG', data }
}

//要全部資料
export const getBlog = () => {
  return async dispatch => {
    const req = new Request('http://localhost:6001/knowledge/blog', {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    console.log(data)
    dispatch(showBlog(data))
  }
}

// //詳細資訊
// export const showBlogDetail = data => {
//   return { type: 'SHOW_BLOG_DETAIL', data }
// }
// export const getBlogDetail = bId => {
//   return async dispatch => {
//     const req = new Request(`http://localhost:6001/knowledge/blog/${bId}`, {
//       method: 'GET',
//       credentials: 'include',
//     })
//     const res = await fetch(req)
//     const data = await res.json()
//     console.log(data)
//     dispatch(showBlogDetail(data))
//   }
// }

// //Question
// export const showQuestion = data => {
//   return { type: 'SHOW_QUESTIONS', data }
// }
// //要全部資料
// export const getQuestion = () => {
//   return async dispatch => {
//     const req = new Request('http://localhost:6001/knowledge/question', {
//       method: 'GET',
//       credentials: 'include',
//     })
//     const res = await fetch(req)
//     const data = await res.json()
//     dispatch(showQuestion(data))
//   }
// }

// //詳細資訊
// export const showQuestionDetail = data => {
//   return { type: 'SHOW_QUESTION_DETAIL', data }
// }
// export const getQuestionDetail = qId => {
//   return async dispatch => {
//     const req = new Request(`http://localhost:6001/knowledge/question/${qId}`, {
//       method: 'GET',
//       credentials: 'include',
//     })
//     const res = await fetch(req)
//     const data = await res.json()
//     console.log(data)
//     dispatch(showQuestionDetail(data))
//   }
// }

// //partner
// export const showPartner = data => {
//   return { type: 'SHOW_PARTNERS', data }
// }

// //要全部
// export const getPartner = () => {
//   return async dispatch => {
//     const req = new Request('http://localhost:6001/knowledge/partner', {
//       method: 'GET',
//       credentials: 'include',
//     })
//     const res = await fetch(req)
//     const data = await res.json()
//     dispatch(showPartner(data))
//   }
// }

// //詳細資訊
// export const showPartnerDetail = data => {
//   return { type: 'SHOW_PRODUCT_DETAIL', data }
// }
// export const getPartnerDetail = pId => {
//   return async dispatch => {
//     const req = new Request(`http://localhost:6001/knowledge/partner/${pId}`, {
//       method: 'GET',
//       credentials: 'include',
//     })
//     const res = await fetch(req)
//     const data = await res.json()
//     console.log(data)
//     dispatch(showPartnerDetail(data))
//   }
// }
