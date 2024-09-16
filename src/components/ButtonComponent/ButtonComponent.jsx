import { Button } from "antd"
import React from "react"

const ButtonComponent = ({size, styleButton, styleTextButton, textButton, ...rests}) => {
    return (
        <Button 
         size={size}   
         style={styleButton}
         styleTextButton={styleTextButton} 
         >
        <span style={styleButton}>{textButton}</span>
        </Button>
    )
}

export default ButtonComponent