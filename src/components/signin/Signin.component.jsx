import React from 'react'
import FormInput from '../form-input/FormInput.component'
import './Signin.style.scss'
import CustomButton from '../custom-button/CustomButton.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

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
        <div className={'signin'}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={onSubmit}>
                <FormInput type={'email'} onChange={handleChange}
                           name={'email'} value={sEmail} required
                           label={'Email'}/>
                <FormInput type={'password'} onChange={handleChange}
                           name={'password'} value={sPassword} required
                           label={'Password'}/>
                <div className={'buttons'}>
                    <CustomButton type={'submit'}>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with GOOGLE</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default Signin
