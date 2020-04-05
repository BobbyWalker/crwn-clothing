import React from 'react'
import Signin from '../../components/signin/Signin.component'
import Register from '../../components/register/Register.component'
import './Authentication.style.css'

const Authentication = () => (
    <div className={'authentication'}>
        <Signin/>
        <Register/>
    </div>
)

export default Authentication
