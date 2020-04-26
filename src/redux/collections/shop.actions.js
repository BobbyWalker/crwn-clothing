import ShopActionTypes from './shop.types'

export const fetchCollectionsSuccess = (collectionMap) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionMap
    }
}

export const fetchCollectionsFailure = (message) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: message
    }
}

export const fetchCollectionsStart = () => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_START
    }
}
