import React from 'react'
import { Link } from 'react-router-dom'
import './Header.style.scss'
import {ReactComponent as Logo} from './Crwn.svg'
import {auth} from '../../firebase/firebase.utils'
import {useSelector} from 'react-redux'
import CartIcon from '../cart-icon/CartIcon.component'
import CartDropdown from '../cart-dropdown/CartDropdown.component'

const Header = () => {
    const pCurrentUser = useSelector(state => state.user.currentUser)
    const pCartHidden = useSelector(state => state.cart.hidden)

    return (
        <div className={'header'}>
            <Link className={'logo-container'} to={'/'}>
                <Logo className={'logo'}/>
            </Link>
            <div className={'options'}>
                <Link className={'option'} to={'/shop'}>SHOP</Link>
                <Link to={'/shop'} className={'option'}>CONTACT</Link>
                {pCurrentUser ?
                    <div className={'option'} onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link to={'/signin'} className={'option'}>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {!pCartHidden && <CartDropdown/>}
        </div>
    )
}

export default Header
