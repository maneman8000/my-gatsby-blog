import React from 'react'
import Button from '@material/react-button'
import {withRipple} from '@material/react-ripple'

const MyButton = ({ children, initRipple, unbounded, ...otherProps }) => {
  return (
    <Button
      ref={initRipple}
      {...otherProps}
    >
      {children}
    </Button>
  )
}

export default withRipple(MyButton);
