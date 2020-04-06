import React from 'react'

import './CollectionsOverview.style.scss'
import {useSelector} from 'react-redux'
import {selectCollections} from '../../redux/collections/shop.selectors'
import PreviewCollection from '../preview-collection/PreviewCollection.component'

const CollectionsOverview = () => {
    const pCollections = useSelector(selectCollections)
    return (
        <div className={'collections-overview'}>
            {pCollections.map(({id, ...otherKeys}) => (
                <PreviewCollection key={id} {...otherKeys}/>
            ))}
        </div>
    )
}

export default CollectionsOverview
