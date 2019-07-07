import React, { useState } from 'react';
import { LoginForm } from '../scomps';
import axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState('username');
    const [password, setPassword] = useState('password');

    const changeHandler = (e) => {
        e.target.name === 'username' && setUsername(e.target.value);
        e.target.name === 'password' && setPassword(e.target.value);
    };


// const createUser = () => {
//     axios.post(`http://localhost:3000/posts`, {username, password})
//         .then(res => {
//         localStorage.setItem('jwt', res.data.token)
//         localStorage.setItem('userId', res.data.userId)
//         localStorage.setItem('username', user.username)
//         }).catch()
// }

const validate = (e) => {
    e.preventDefault();
    axios
        .post('http://localhost:3000/api/auth/login', {username, password})
        .then(res => {
            console.log('res.data LOGIN', res.data);
            localStorage.setItem('jwt', res.data.token);
            localStorage.setItem('userId', res.data.userId)
            // const token = localStorage.getItem('jwt');
        }).catch()
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
            <button type='submit'> Login </button>
        </LoginForm>
    )
};

export default Login;