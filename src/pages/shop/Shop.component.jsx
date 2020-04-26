import React from 'react'
import {ShopContainer} from './Shop.styles'
import { Route } from 'react-router-dom'

import {useDispatch} from 'react-redux'
import CollectionPageContainer from '../category/Collection.container'
import {fetchCollectionsStart} from '../../redux/collections/shop.actions'
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverview.container'

const Shop = ({match}) => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchCollectionsStart())
    }, [dispatch])

    return (
        <ShopContainer>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:categoryID`} component={CollectionPageContainer}/>
        </ShopContainer>
    )
}

export default Shop
