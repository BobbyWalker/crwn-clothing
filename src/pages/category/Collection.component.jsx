import React from 'react'
import {CollectionPageContainer, CollectionPageItemsContainer, CollectionPageTitle} from './Collection.styles'

import {useSelector} from 'react-redux'
import {selectCollection} from '../../redux/collections/shop.selectors'
import CollectionItem from '../../components/collection-item/CollectionItem.components'

const Collection = ({match}) => {
    const pCollection = useSelector(selectCollection(match.params.categoryID))
    console.log(pCollection)
    return (
        <CollectionPageContainer>
            <CollectionPageTitle>{pCollection.title}</CollectionPageTitle>
            <CollectionPageItemsContainer>
                {pCollection.items.map(item => <CollectionItem key={item.id} item={item}/>)}
            </CollectionPageItemsContainer>
        </CollectionPageContainer>
    )
}

export default Collection
