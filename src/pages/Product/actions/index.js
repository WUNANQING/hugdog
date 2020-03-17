//跟server要資料
export const showProduct = data => {
  return { type: 'SHOW_PRODUCT', data }
}

export const getProductData = () => {
  return async dispatch => {
    const req = new Request(`http://localhost:6001/product`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    //console.log(data.product) //後端將資料儲存在物件中key=product，因此需要用成員運算子{product:[{...},{...}]}
    dispatch(showProduct(data.product))
  }
}
//跟server要商品依照商品類別
export const showProductCategory = data => {
  return { type: 'SHOW_PRODUCT_CATEGORY', data }
}
export const getProductCategory = pCategoryId => {
  return async dispatch => {
    const req = new Request(
      `http://localhost:6001/product/?pCategoryId=${pCategoryId}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    const res = await fetch(req)
    const data = await res.json()
    console.log(data) //因為是單筆因此後段預設回傳物件
    dispatch(showProduct(data))
  }
}
//跟server要商品細節
export const showProductDetail = data => {
  return { type: 'SHOW_PRODUCT_DETAIL', data }
}
export const getProductDetail = pId => {
  return async dispatch => {
    const req = new Request(`http://localhost:6001/product/${pId}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    console.log(data) //因為是單筆因此後段預設回傳物件
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
