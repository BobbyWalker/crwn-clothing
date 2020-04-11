import React from 'react'

import {CollectionsOverviewContainer} from './CollectionsOverview.style'

import {useSelector} from 'react-redux'
import {selectCollectionsForPreview} from '../../redux/collections/shop.selectors'
import PreviewCollection from '../preview-collection/PreviewCollection.component'

const CollectionsOverview = () => {
    const pCollections = useSelector(selectCollectionsForPreview)
    return (
        <CollectionsOverviewContainer>
            {pCollections.map(({id, ...otherKeys}) => (
                <PreviewCollection key={id} {...otherKeys}/>
            ))}
        </CollectionsOverviewContainer>
    )
}

export default CollectionsOverview
