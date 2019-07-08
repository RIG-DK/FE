import React, { useState } from 'react';
import { LoginForm } from '../scomps';
import axios from 'axios';

const Login = (props) => {

    const [username, setUsername] = useState('username');
    const [password, setPassword] = useState('password');
    // const [email, setEmail] = useState('email');
    // const [firstName, setFirstName] = useState('firstName');
    // const [lastName, setLastName] = useState('lastName');

    const changeHandler = (e) => {
        e.target.name === 'username' && setUsername(e.target.value);
        e.target.name === 'password' && setPassword(e.target.value);
        // e.target.name === 'email' && setEmail(e.target.value);
        // e.target.name === 'firstName' && setFirstName(e.target.value);
        // e.target.name === 'lastName' && setLastName(e.target.value);
    };

    // const createUser = (e) => {
    //     e.preventDefault();
    //     const SignUpCreds = {username, password, email, firstName, lastName}
    //     axios
    //         .post(`http://localhost:3000/api/auth/register`, SignUpCreds)
    //         .then(res => {
    //         localStorage.setItem('jwt', res.data.token)
    //         localStorage.setItem('userId', res.data.userId)
    //         localStorage.setItem('username', username)
    //         console.log(res);
    //         }).catch(err => console.log(err));
    // }

    const validate = (e) => {
        e.preventDefault();
        const loginCreds = {username, password}
        axios
            .post('http://localhost:3000/api/auth/login', loginCreds)
            .then(res => {
                console.log(res);
                localStorage.setItem('jwt', res.data.token);
                localStorage.setItem('userId', res.data.userId)
                // const token = localStorage.getItem('jwt');
                props.history.push('/posts')

            }).catch(err => console.log(err));
    };

    return (
        <LoginForm onSubmit={validate} >
            <h1>Avatar XIII</h1>
            <input 
                name='username'
                placeholder='username'
                onChange={changeHandler}
            />
            <input
                name='password'
                placeholder='password'
                onChange={changeHandler}
            />
            <input
                name='email'
                placeholder='email'
                onChange={changeHandler}
            />
            <input
                name='firstName'
                placeholder='firstName'
                onChange={changeHandler}
            />
            <input
                name='lastName'
                placeholder='lastName'
                onChange={changeHandler}
            />
            <button type='submit'> Login </button>
        </LoginForm>
    )
};

export default Login;