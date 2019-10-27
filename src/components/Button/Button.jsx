import React from 'react'
import { Button } from './ButtonStyles';

const ButtonContainer = ({ children }) => {
  return (
    <Button role='button'>
      <span>{children}</span>
    </Button>
  )
}

export default ButtonContainer;
