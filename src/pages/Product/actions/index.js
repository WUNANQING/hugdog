//商品數量
export const plusQuantity = quantity => ({
  type: 'PLUS_QUANTITY',
  quantity,
})
export const minusQuantity = quantity => ({
  type: 'MINUS_QUANTITY',
  quantity,
})

//跟server要商品資料(全部)
export const showProducts = data => {
  return { type: 'SHOW_PRODUCTS', data }
}
//
export const getProducts = page => {
  return async dispatch => {
    const req = new Request(`http://localhost:6001/products/${page}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    // console.log(data)
    dispatch(showProducts(data))
  }
}
//跟server要商品種類
export const getProductsCategory = cId => {
  console.log(cId)
  return async dispatch => {
    const req = new Request(`http://localhost:6001/products?cId=${cId}}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    dispatch(showProducts(data))
  }
}
//跟server要商品細節
export const showProductDetail = data => {
  return { type: 'SHOW_PRODUCT_DETAIL', data }
}
export const getProductDetail = pId => {
  return async dispatch => {
    const req = new Request(
      `http://localhost:6001/products/productDetail/${pId}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    const res = await fetch(req)
    const data = await res.json()
    // console.log('detail', data)
    dispatch(showProductDetail(data))
  }
}
