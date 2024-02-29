import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import { logout } from '../actions/TodoAction'; 
const ProfileScreen = () => {
    const dispatch = useDispatch();
    const userLogin  = useSelector(state => state.userInfo)   
    const { userInfo } = userLogin
    const navigate = useNavigate()
    const handleLogout = () => {
        
        dispatch(logout());
        navigate('/')
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="text-center">
                <h2>User Profile</h2>
                <div className="mb-3">
                    <strong> Name   : </strong> {userInfo.name}
                </div>
                <div className="mb-3">
                    <strong>Email: </strong> {userInfo.email}
                </div>
                <Button variant="danger" onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    );
};

export default ProfileScreen;
