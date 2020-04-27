import React from 'react'
import MenuItem from '../menu-item/MenuItem.component'

import {DirectoryMenuContainer} from './Directory.styles'
import {useSelector} from 'react-redux'
import {selectSections} from '../../redux/directory/directory.selector'

const Directory = (props) => {
    const pSections = useSelector(selectSections)

    return (
        <DirectoryMenuContainer>
            {pSections.map(({id, ...others}) => {
                return <MenuItem key={'menu-item' + id} {...others}/>
            })}
        </DirectoryMenuContainer>
    )
}

export default Directory
