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
// 模擬與伺服器相連
export const plusQuantityAsync = quantity => {
  return dispatch => {
    setTimeout(() => {
      console.log('delay 3s to add quantity')

      dispatch(plusQuantity(quantity))
    }, 3000)
  }
}
