import { combineReducers } from 'redux'
import { REQUEST_DATA, RECEIVE_DATA, REQUEST_CAMERA_INFO, RECEIVE_CAMERA_INFO } from '../constants/actionTypes'

const topic_data = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_DATA:
            return {
                ...state,
                isFetching: false,
                items: action.topic_data,
                lastUpdated: action.received
            }
        default:
            return state;
    }
}

const camera_info = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type) {
        case REQUEST_CAMERA_INFO:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_CAMERA_INFO:
            return {
                ...state,
                isFetching: false,
                items: action.camera_info,
                lastUpdated: action.received
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    topic_data,
    camera_info
  })

export default rootReducer