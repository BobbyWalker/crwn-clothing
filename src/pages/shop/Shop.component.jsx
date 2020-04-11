import React from 'react'
import {ShopContainer} from './Shop.styles'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component'
import Collection from '../category/Collection.component'

const Shop = ({match}) => {
    return (
        <ShopContainer>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:categoryID`} component={Collection}/>
        </ShopContainer>
    )
}

export default Shop
