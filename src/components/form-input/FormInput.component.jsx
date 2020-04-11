import React from 'react'
import {FormInputGroup, FormInputLabel, FormInputText} from './FormInput.styles'

const FormInput = ({handleChange, label, ...otherProps}) => (
    <FormInputGroup>
        <FormInputText onChange={handleChange} {...otherProps} />
        {
            label &&
            <FormInputLabel shrink={otherProps.value.length}>
                {label}
            </FormInputLabel>
        }
    </FormInputGroup>
)

export default FormInput
