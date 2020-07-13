// import external modules
import { combineReducers } from 'redux'

// local imports
import artists from './artists'
import tracks from './tracks'

// combine reducers to single reducer
const reducer = combineReducers({
  
  artists,
  tracks
})

export default reducer