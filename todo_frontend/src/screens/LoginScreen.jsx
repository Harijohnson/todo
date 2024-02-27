import React,{useState,} from 'react'
import { Link } from 'react-router-dom'
import { Form,Button,Col,Row } from 'react-bootstrap'
import  FormContainer  from '../components/FormContainer'
import { login } from '../actions/todoAction'

function LoginScreen() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const submitHandeler = (e) => {
        console.log('button clicked')
        e.preventDefault()
        login(email,password)
    }
  return (
    <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandeler} >
                <Form.Group controlId='email'>
                    <Form.Label>
                        Email 
                    </Form.Label>
                    <Form.Control 
                    type='email'
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
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
                    New User ?   
                    <Link to ='/register' >
                        Register
                    </Link>
                </Col>
            </Row>
    </FormContainer>
  )
}

export default LoginScreen
