//文章
export const showArticle = date => {
  return { type: 'SHOW_ARTICLE', data }
}
//Question
export const showQuestion = date => {
  return { type: 'SHOW_QUESTION', data }
}

//講座
export const showPartner = data => {
  return { type: 'SHOW_Partner', data }
}

//要資料--文章
export const getArticleData = () => {
  return async dispatch => {
    const req = new Request('http://localhost:6001/knowledge', {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    dispatch(showArticle(data.article))
  }
}

//要資料--問答
export const getQuestionData = () => {
  return async dispatch => {
    const req = new Request('http://localhost:6001/question', {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    dispatch(showQuestion(data.article))
  }
}

//要資料--Partner
export const getPartnerData = () => {
  return async dispatch => {
    const req = new Request('http://localhost:6001/partner', {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    dispatch(showPartner(data.partner))
  }
}
