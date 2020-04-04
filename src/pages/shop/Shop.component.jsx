import React from 'react'
import ShopData from './Shop.data'
import './Shop.styles.scss'
import PreviewCollection from '../../components/preview-collection/PreviewCollection.component'

const Shop = (props) => {
    const [sCollections] = React.useState(ShopData)

    return (
        <div className={'shop'}>
            {sCollections.map(({id, ...otherKeys}) => (
                <PreviewCollection key={id} {...otherKeys}/>
            ))}
        </div>
    )
}

export default Shop
