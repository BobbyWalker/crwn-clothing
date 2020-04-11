import React from 'react'
import {ReactComponent as Logo} from './Crwn.svg'
import {auth} from '../../firebase/firebase.utils'
import {useSelector} from 'react-redux'
import CartIcon from '../cart-icon/CartIcon.component'
import CartDropdown from '../cart-dropdown/CartDropdown.component'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './Header.styles'

const Header = () => {
    const pCurrentUser = useSelector(selectCurrentUser)
    const pCartHidden = useSelector(selectCartHidden)

    return (
        <HeaderContainer>
            <LogoContainer to={'/'}>
                <Logo className={'logo'}/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to={'/shop'}>SHOP</OptionLink>
                <OptionLink to={'/shop'}>CONTACT</OptionLink>
                {pCurrentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to={'/signin'} className={'option'}>SIGN IN</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {!pCartHidden && <CartDropdown/>}
        </HeaderContainer>
    )
}

export default Header
