import React from 'react'
import {Button} from './CustomButton.styles'

const CustomButton = ({children, ...otherProps}) => (
    <Button {...otherProps}>
        {children}
    </Button>
)

export default CustomButton
