import React,{useState} from 'react'
import { Link,useLocation } from 'react-router-dom'
import { Form,Button,Col,Row } from 'react-bootstrap'
import  FormContainer  from '../components/FormContainer'

function RegisterScreen() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const location =useLocation()
    // const redirect = location.search ? location.search.split('=')[1] :'/'
    const submitHandeler = (e) => {
        e.preventDefault()
        
    }
  return (
    <FormContainer>
            <h1>Register</h1>
            <Form onSubmit={submitHandeler} >
            <Form.Group controlId='name'>
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
                        Email Address
                    </Form.Label>
                    <Form.Control 
                    type='email'
                    placeholder='abc@gmail.com'
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
                <Form.Group controlId='confirempassword'>
                    <Form.Label>
                        Confirm  Password
                    </Form.Label>
                    <Form.Control 
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}>
                        
                    </Form.Control>
                </Form.Group>
                <Button 
                type='submit'
                varient= 'primary'
                >
                Register
                </Button>
            </Form>

       
    </FormContainer>
  )
}

export default RegisterScreen
