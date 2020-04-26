import {createSelector} from 'reselect'
import DataState from '../utils/DataState'

const selectShop = state => state.shop

export const selectCollections = createSelector(selectShop,
    (shop) => shop.collections)

export const selectCollection = collectionUrlParam =>
    createSelector(selectCollections,
            collections => collections ? collections[collectionUrlParam] : null)

export const selectCollectionsForPreview = createSelector(selectCollections,
    collections => collections ? Object.keys(collections).map(key => collections[key]) : [])

export const selectCollectionsIsLoading = createSelector(selectShop,
    shop => shop.status === DataState.LOADING)

export const selectIsCollectionsLoaded = createSelector(selectShop,
    shop => shop.status === DataState.SUCCESS)
