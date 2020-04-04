import React from 'react'
import './PreviewCollection.styles.scss'
import CollectionItem from '../collection-item/CollectionItem.components'

const PreviewCollection = (props) => {
    console.log(props)
    return (
        <div className={'preview-collection'}>
            <h1 className={'title'}>{props.title}</h1>
            <div className={'preview'}>
                {props.items.filter((item, i) => i < 4).map(({id, ...others}) => (
                        <CollectionItem key={id} {...others}/>
                    )
                )}
            </div>
        </div>
    )
}

export default PreviewCollection
