import React from 'react'
import CollectionItem from '../collection-item/CollectionItem.components'
import {PreviewCollectionContainer, PreviewWrapper, TitleH1} from './PreviewCollection.style'

const PreviewCollection = (props) => {
    return (
        <PreviewCollectionContainer>
            <TitleH1>{props.title}</TitleH1>
            <PreviewWrapper>
                {props.items.filter((item, i) => i < 4).map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    )
                )}
            </PreviewWrapper>
        </PreviewCollectionContainer>
    )
}

export default PreviewCollection
