import React from 'react'
import { Spinner } from 'react-bootstrap'
function Loading() {
  return (
    <Spinner
    animation='grow'
    role = 'status'
    style = {{
        height:'100px',
        width:'100px',
        margin:'auto',
        display:'block',
    }}>
      <span className='visually-hidden' >Loading...</span>
    </Spinner>
  )
}

export default Loading