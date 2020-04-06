import React from 'react'
import MenuItem from '../menu-item/MenuItem.component'

import './Directory.styles.scss'
import {useSelector} from 'react-redux'
import {selectSections} from '../../redux/directory/directory.selector'

const Directory = (props) => {
    const pSections = useSelector(selectSections)

    return (
        <div className={'directory-menu'}>
            {pSections.map(({id, ...others}) => {
                return <MenuItem key={'menu-item' + id} {...others}/>
            })}
        </div>
    )
}

export default Directory
