//Select所有商品
export const showProducts = data => {
  return { type: 'SHOW_PRODUCTS', data }
}
//跟node要資料
export const reqServerProductData = product => {
  return async dispatch => {
    const req = new Request(`http://localhost:6001/product/:${product}?`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    dispatch(showProducts(data))
  }
}

//商品數量
export const plusQuantity = quantity => ({
  type: 'PLUS_QUANTITY',
  quantity,
})
export const minusQuantity = quantity => ({
  type: 'MINUS_QUANTITY',
  quantity,
})
//加入購物車
export const addToCart = () => ({
  type: 'ADDTO_CART',
})
