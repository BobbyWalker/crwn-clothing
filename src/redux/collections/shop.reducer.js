import ShopActionTypes from './shop.types'
import DataState from '../utils/DataState'

const initialState = {
    status: DataState.IDLE,
    collections: null,
    message: ''
}

const shopReducer = (state = initialState, action) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                status: DataState.LOADING
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                status: DataState.SUCCESS,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                status: DataState.FAILURE,
                message: action.payload
            }
        default:
            return state
    }
}

export default shopReducer
