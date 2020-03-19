
//Select所有商品
export const showProduct = data => {
  return { type: 'SHOW_PRODUCT', data }
}
//跟server要資料
export const getProductData = () => {
  return async dispatch => {
    const req = new Request(`http://localhost:6001/product`, {

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

export const getProducts = () => {
  return async dispatch => {
    const req = new Request(`http://localhost:6001/products`, {
>>>>>>> 7c189a2f189ff98cbc977b25f4a1973f2c81e303
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    //console.log(data.product) //後端將資料儲存在物件中key=product，因此需要用成員運算子{product:[{...},{...}]}
    dispatch(showProduct(data.product))
    dispatch(showProducts(data.product))

  }
}

//跟server要商品細節

export const getProductDetail = pId => {
  return async dispatch => {
    const req = new Request(`http://localhost:6001/product/${pId}`, {

export const showProductDetail = data => {
  return { type: 'SHOW_PRODUCT_DETAIL', data }
}
export const getProductDetail = pId => {
  return async dispatch => {
    const req = new Request(`http://localhost:6001/products/${pId}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    //console.log(data) //因為是單筆因此後段預設回傳物件
    dispatch(showProduct(data))
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

    dispatch(showProductDetail(data))
  }
}
