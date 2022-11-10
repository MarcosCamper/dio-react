import React from 'react'
import { Controller } from "react-hook-form";
import {
    IconContainer,
    ErrorText,
    InputContainer,
    InputText,
} from './styles';
const Input = ({leftIcon, errorMessage, name, control, ...rest}) => {
  return (
    <>
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer> ) : null}
        
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...rest} {...field} />}
      />
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export { Input };