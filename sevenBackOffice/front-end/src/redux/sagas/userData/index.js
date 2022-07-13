import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { getDataUserSuccess, getDataUserFailure, deleteDataUserSuccess, deleteDataUserFailure} from '../../actions'
import * as types from '../../types'

import api from '../../../config/configApi';

let userApi = []
//=============================================================================================
const getData = async () => {
    try {
        const headers = {
            'headers': {
                'Authorization': "Bearer " + localStorage.getItem('token')
            }
        }
        const response = await api.get("users", headers)
        //const response = await api.get("localost:3000/users" + localStorage.getItem('id'), headers)
        userApi = response
        console.log(userApi);
        return true                
    } catch (error) {
        return false
    }
}
export function* getUserData(action) {
    try {
        yield call(getData, action.payload)
        yield put(getDataUserSuccess(userApi))
    } catch (error) {
        yield put(getDataUserFailure(userApi))
    }
}
//=============================================================================================
// const deleteVideo = async (videoId) => {
//     try {
//         const headers = {
//             'headers': {
//                 'Authorization': "Bearer " + localStorage.getItem('token')
//             }
//         }
//         const response = await api.delete("v1/videos/" + videoId, {"user": localStorage.getItem('id')}, headers)
//         userApi = response
//         console.log(response);
//         return true                
//     } catch (error) {
//         console.log(error);
//         return false
//     }
// }
// export function* deleteUserVideo(action) {
//     try {
//         yield call(deleteVideo, action.payload)
//         yield put(deleteVideoIdSuccess(action.payload))
//     } catch (error) {
//         yield put(deleteVideoIdFailure(userApi))
//     }
// }
//=============================================================================================
export default all(
    [
        takeLatest(types.GET_DATA_USER_REQUEST, getUserData,),
        //takeLatest(types.DELETE_VIDEO_ID_REQUEST, deleteUserVideo)
    ]
)