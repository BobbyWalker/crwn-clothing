import React from 'react'
import {withRouter} from 'react-router-dom'
import {MenuItemContent, MenuItemBackgroundImage, MenuItemContainer,
        MenuItemContentSubTitle, MenuItemContentTitle} from './MenuItem.styles'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <MenuItemBackgroundImage imageUrl={imageUrl}/>
        <MenuItemContent>
            <MenuItemContentTitle>{title.toUpperCase()}</MenuItemContentTitle>
            <MenuItemContentSubTitle>SHOP NOW</MenuItemContentSubTitle>
        </MenuItemContent>
    </MenuItemContainer>
)

export default withRouter(MenuItem)
