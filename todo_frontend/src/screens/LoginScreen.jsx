import React,{useState} from 'react'
import { Link,useLocation } from 'react-router-dom'
import { Form,Button,Col,Row } from 'react-bootstrap'
import  FormContainer  from '../components/FormContainer'

function LoginScreen() {

    const {name,setName} = useState('')
    const {password,setPassword} = useState('')
    const location =useLocation()
    const redirect = location.search ? location.search.split('=')[1] :'/'
    const submitHandeler = (e) => {
        e.preventDefault()
        console.log('Button Clicked')
    }
  return (
    <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandeler} >
                <Form.Group controlId='email'>
                    <Form.Label>
                        User Name
                    </Form.Label>
                    <Form.Control 
                    type='text'
                    placeholder='User Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control 
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                        
                    </Form.Control>
                </Form.Group>
                <Button 
                type='submit'
                varient= 'primary'
                >
                Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New User ?   <Link to ={ redirect ? `/register ? redirect = ${redirect}` : '/register' }>
                        Register
                    </Link>
                </Col>
            </Row>
    </FormContainer>
  )
}

export default LoginScreen
