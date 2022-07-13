import * as types from '../../types'

export function getDataUserRequest(data) {
    return {
        type: types.GET_DATA_USER_REQUEST,
    }
}

export function getDataUserSuccess(data) {
    return {
        type: types.GET_DATA_USER_SUCCESS,
        payload: data
    }
}

export function getDataUserFailure(data) {
    return {
        type: types.GET_DATA_USER_FAILURE,
        payload: data
    }
}
//===============================================
export function deleteDataUserRequest(data) {
    return {
        type: types.DELETE_DATA_USER_REQUEST,
        payload: data
    }
}

export function deleteDataUserSuccess(data) {
    return {
        type: types.DELETE_DATA_USER_SUCCESS,
        payload: data
    }
}

export function deleteDataUserFailure(data) {
    return {
        type: types.DELETE_DATA_USER_FAILURE,
        payload: data
    }
}