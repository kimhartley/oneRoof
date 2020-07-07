// import external modules
import { combineReducers } from 'redux'

// local imports
import artists from './artists'

// combine reducers to single reducer
const reducer = combineReducers({
  
  artists
})

export default reducer