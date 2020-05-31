import * as types from '../constants/actionTypes'
import * as ids from '../constants/ids'
import * as topics from '../constants/topics'


export const requestData = () => ({
    type: types.REQUEST_DATA
})

export const receiveData = (json) => {
    return ({
    type: types.RECEIVE_DATA,
    topic_data: json.filter(child => {
        if (child.topic === topics.GPS_TOPIC ||
            child.topic === topics.JOINT_STATES_TOPIC ||
            child.topic === topics.SONAR_CLOUD_TOPIC ) {
            return child
        }
    }),
    received: Date.now()
  })}
  
export const fetchDataIfNeeded = () => (dispatch, getState) => {
    if (ableToFetchData(getState())) {
        return dispatch(fetchData(ids.ACCOUNT_ID, ids.DEVICE_ID, ids.TOKEN, ids.SECRET))
    }
}

const ableToFetchData = (state) => {
    const topic_data = state.topic_data
    if (!topic_data) {
        return true
    } else if (topic_data.isFetching) {
       return false
    }    
    return true
}
  
  
const fetchData = (accountID, deviceID, token, secret) => dispatch => {
    dispatch(requestData())
    const data = require('../test_data/data.json');
    return dispatch(receiveData(data));
    // return fetch(`https://api.freedomrobotics.ai/accounts/${accountID}/devices/${deviceID}/data?mc_token=${token}&mc_secret=${secret}`)
    //   .then(response => response.json())
    //   .then(json => dispatch(receiveData(json)))
}


export const requestCameraInfo = () => ({
    type: types.REQUEST_CAMERA_INFO
})

export const receiveCameraInfo = (json) => {
    return ({
    type: types.RECEIVE_CAMERA_INFO,
    camera_info: json.filter(child => {
        return child
    }),
    received: Date.now()
  })}
  
export const fetchCameraInfoIfNeeded = () => (dispatch, getState) => {
    if (ableToFetchCameraInfo(getState())) {
        return dispatch(fetchCameraInfo(ids.ACCOUNT_ID, ids.DEVICE_ID, ids.TOKEN, ids.SECRET))
    }
}

const ableToFetchCameraInfo = (state) => {
    const camera_info = state.camera_info
    if (!camera_info) {
        return true
    } else if (camera_info.isFetching) {
       return false
    }    
    return true
}
  
const fetchCameraInfo = (accountID, deviceID, token, secret) => dispatch => {
    dispatch(requestCameraInfo())
    const data = require('../test_data/videos.json');
    return dispatch(receiveCameraInfo(data));
    // return fetch(`https://api.freedomrobotics.ai/accounts/${accountID}/devices/${deviceID}/videos?pre_signed=true&mc_token=${token}&mc_secret=${secret}`)
    //   .then(response => response.json())
    //   .then(json => dispatch(receiveData(json)))
}
