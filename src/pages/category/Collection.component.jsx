import React from 'react'

import './Collection.styles.scss'

import {useSelector} from 'react-redux'
import {selectCollection} from '../../redux/collections/shop.selectors'
import CollectionItem from '../../components/collection-item/CollectionItem.components'

const Collection = ({match}) => {
    const pCollection = useSelector(selectCollection(match.params.categoryID))
    console.log(pCollection)
    return (
        <div className={'collection-page'}>
            <h2 className={'title'}>{pCollection.title}</h2>
            <div className={'items'}>
                {pCollection.items.map(item => <CollectionItem key={item.id} item={item}/>)}
            </div>
        </div>
    )
}

export default Collection
