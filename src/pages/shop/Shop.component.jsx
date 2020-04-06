import React from 'react'
import './Shop.styles.scss'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component'

const Shop = (props) => {
    return (
        <div className={'shop'}>
            <CollectionsOverview/>
        </div>
    )
}

export default Shop
