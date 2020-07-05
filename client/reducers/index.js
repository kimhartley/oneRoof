// import external modules
import { combineReducers } from 'redux'

// local imports
import templateStore from './templateReducer'

// combine reducers to single reducer
const reducer = combineReducers({
  // add reducers here, remove teplateStore when nolonger needed
  templateStore
})

// export single reducer
export default reducer