import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const LOGIN_USER = gql`
  mutation LoginUser($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [loginUser] = useMutation(LOGIN_USER);

    const handleLogin = () => {
        loginUser({
            variables: { userName, password },
        })
            .then((data) => {
                // Handle successful login, store token, redirect, etc.
                console.log('User logged in successfully:', data);
            })
            .catch((error) => {
                // Handle error, display error message, etc.
                console.error('Error logging in:', error.message);
            });
    };

    return (
        <div>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginForm;