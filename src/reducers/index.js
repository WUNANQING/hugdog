import { combineReducers } from 'redux'
import { getCoupons } from './marketingReducer'
const rootReducer = combineReducers({
  getCoupons,
})
export { rootReducer }
