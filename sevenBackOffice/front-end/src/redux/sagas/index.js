import { all } from 'redux-saga/effects'
import userData from './userData'

export default function* rootSaga() {
    return yield all([
        userData,
        
    ])
}