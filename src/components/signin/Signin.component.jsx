import React from 'react'
import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/CustomButton.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import {SigninContainer, ButtonsContainer} from './Signing.styles'
import {TitleH2} from '../styles/common.styles'

const Signin = (props) => {
    const [sEmail, setEmail] = React.useState('')
    const [sPassword, setPassword] = React.useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            await auth.signInWithEmailAndPassword(sEmail, sPassword)
            setEmail('')
            setPassword('')
        }
        catch (e) {
            console.log(e)
        }

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
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with GOOGLE</CustomButton>
                </ButtonsContainer>
            </form>
        </SigninContainer>
    )
}

export default Signin
