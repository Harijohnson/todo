import React,{useState} from 'react'
import { Link,useLocation } from 'react-router-dom'
import { Form,Button,Col,Row } from 'react-bootstrap'
import  FormContainer  from '../components/FormContainer'
import { registerUser,userLogin } from '../actions/TodoAction';
import {  useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
function RegisterScreen() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const redirect = location.search ? location.search.split('=')[1] :'/'
    const submitHandeler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword){
            alert("password dose not match")
        }
        else {
            dispatch(registerUser(name,email,password))
            .then( () => {
                dispatch(userLogin(email,password))
                navigate('/')
            }

            )
        }
        
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


            <Row className='py-3'>
                <Col>
                    Already User ? {' '}  
                    <Link to ='/login' >
                        Login
                    </Link>
                </Col>
            </Row>
       
    </FormContainer>
  )
}

export default RegisterScreen
