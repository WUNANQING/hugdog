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

//跟server要商品資料(依照類別)
// export const getProductByCategory = pCategoryId => {
//   return async dispatch => {
//     const req = new Request(`http://localhost:6001/product/${pCategoryId}`, {
//       method: 'GET',
//       credentials: 'include',
//     })
//     const res = await fetch(req)
//     const data = await res.json()
//     dispatch(showProduct(data.product))
//   }
// }

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
    //console.log(data) //因為是單筆因此後段預設回傳物件
    dispatch(showProductDetail(data))
  }
}

//加入購物車，傳入商品細節內容，用物件儲存
export const addItem = data => {
  console.log(data)
  return { type: 'ADD_ITEM', data }
}
