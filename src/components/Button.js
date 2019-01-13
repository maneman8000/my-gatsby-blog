import React from 'react'
import {MDCRipple} from '@material/ripple';
import "@material/button/dist/mdc.button.css"

export default ({ className, children }) => (
  <button
    ref={c => new MDCRipple(c)}
    type="button"
    className={`mdc-button ${className}`}
  >
    {children}
  </button>
)