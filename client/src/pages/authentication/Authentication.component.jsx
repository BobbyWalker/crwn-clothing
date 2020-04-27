import React from 'react'
import Signin from '../../components/signin/Signin.component'
import Register from '../../components/register/Register.component'
import './Authentication.style'
import {AuthenticationContainer} from './Authentication.style'

const Authentication = () => (
    <AuthenticationContainer>
        <Signin/>
        <Register/>
    </AuthenticationContainer>
)

export default Authentication
