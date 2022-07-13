import { combineReducers } from 'redux'
import { userDataReducer } from './userData'

const rootReducer = combineReducers({
    userData: userDataReducer,
})

export default rootReducer