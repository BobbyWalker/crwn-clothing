import React from 'react'
import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/CustomButton.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import './Register.style.scss'

const Register = (props) => {
    const [sDisplayName, setDisplayName] = React.useState('')
    const [sEmail, setEmail] = React.useState('')
    const [sPassword, setPassword] = React.useState('')
    const [sConfirmPassword, setConfirmPassword] = React.useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(sPassword !== sConfirmPassword) {
            alert('Passwords do not match')
            return
        }

        const {user} = await auth.createUserWithEmailAndPassword( sEmail, sPassword )
        await createUserProfileDocument(user, {
            displayName: sDisplayName, photoURL: null, phoneNumber: null})
    }

    const handleChange = (e) => {
        const { name, value } = e.currentTarget

        switch(name) {
            case 'displayName':
                setDisplayName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
            case 'confirmPassword':
                setConfirmPassword(value)
                break
            default:
                break
        }
    }

    return (
        <div className={'register'}>
            <h2 className={'title'}>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className={'register-form'} onSubmit={handleSubmit}>
                <FormInput type={'text'} name={'displayName'}
                           value={sDisplayName} onChange={handleChange}
                           label={'Display Name'} required/>
                <FormInput type={'email'} name={'email'}
                           value={sEmail} onChange={handleChange}
                           label={'Email'} required/>
                <FormInput type={'password'} name={'password'}
                           value={sPassword} onChange={handleChange}
                           label={'Password'} required/>
                <FormInput type={'password'} name={'confirmPassword'}
                           value={sConfirmPassword} onChange={handleChange}
                           label={'Confirm Password'} required/>
                <CustomButton type={'submit'}>Register</CustomButton>
            </form>
        </div>
    )
}

export default Register
