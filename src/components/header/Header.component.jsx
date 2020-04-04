import React from 'react'
import { Link } from 'react-router-dom'
import './Header.style.scss'
import {ReactComponent as Logo} from './Crwn.svg'
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => (
    <div className={'header'}>
        <Link className={'logo-container'} to={'/'}>
            <Logo className={'logo'}/>
        </Link>
        <div className={'options'}>
            <Link className={'option'} to={'/shop'}>SHOP</Link>
            <Link to={'/shop'} className={'option'}>CONTACT</Link>
            {currentUser ?
                <div className={'option'} onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link to={'/signin'} className={'option'}>SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header
