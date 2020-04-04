import React from 'react'
import { Link } from 'react-router-dom'
import './Header.style.scss'
import {ReactComponent as Logo} from './Crwn.svg'

const Header = () => (
    <div className={'header'}>
        <Link className={'logo-container'} to={'/'}>
            <Logo className={'logo'}/>
        </Link>
        <div className={'options'}>
            <Link className={'option'} to={'/shop'}>SHOP</Link>
            <Link to={'/shop'} className={'option'}>CONTACT</Link>
            <Link to={'/shop'} className={'option'}>LOGIN</Link>
        </div>
    </div>
)

export default Header
