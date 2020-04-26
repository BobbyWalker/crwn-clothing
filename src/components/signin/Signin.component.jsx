import React from 'react'
import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/CustomButton.component'
import {SigninContainer, ButtonsContainer} from './Signing.styles'
import {TitleH2} from '../styles/common.styles'
import {useDispatch} from 'react-redux'
import {googleSigninStart, emailSigninStart} from '../../redux/user/user.actions'

const Signin = (props) => {
    const dispatch = useDispatch()
    const [sEmail, setEmail] = React.useState('')
    const [sPassword, setPassword] = React.useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        dispatch(emailSigninStart(sEmail, sPassword))
    }

    const handleChange = (e) => {
        const { value, name } = e.currentTarget
        switch(name) {
            case 'password':
                setPassword(value)
                break
            case 'email':
                setEmail(value)
                break
            default:
                return
        }
    }

    return (
        <SigninContainer>
            <TitleH2>I already have an account</TitleH2>
            <span>Sign in with your email and password</span>
            <form onSubmit={onSubmit}>
                <FormInput type={'email'} onChange={handleChange}
                           name={'email'} value={sEmail} required
                           label={'Email'}/>
                <FormInput type={'password'} onChange={handleChange}
                           name={'password'} value={sPassword} required
                           label={'Password'}/>
                <ButtonsContainer>
                    <CustomButton type={'submit'}>Sign In</CustomButton>
                    <CustomButton type={'button'} onClick={() => dispatch(googleSigninStart())} isGoogleSignIn>Sign In with GOOGLE</CustomButton>
                </ButtonsContainer>
            </form>
        </SigninContainer>
    )
}

export default Signin
