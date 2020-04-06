import React from 'react'
import './Shop.styles.scss'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component'
import Collection from '../category/Collection.component'

const Shop = ({match}) => {
    return (
        <div className={'shop'}>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:categoryID`} component={Collection}/>
        </div>
    )
}

export default Shop
