import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const REGISTER_USER = gql`
  mutation RegisterUser($firstName: String!, $lastName: String!, $userName: String!, $password: String!, $email: String!) {
    createUser(firstName: $firstName, lastName: $lastName, userName: $userName, password: $password, email: $email) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

const RegisterForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [registerUser] = useMutation(REGISTER_USER);

    const handleRegister = () => {
        registerUser({
            variables: { firstName, lastName, userName, password, email },
        })
            .then((data) => {
                // Handle successful registration, redirect, show success message, etc.
                console.log('User registered successfully:', data);
            })
            .catch((error) => {
                // Handle error, display error message, etc.
                console.error('Error registering user:', error.message);
            });
    };

    return (
        <div>
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
            />
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
            />
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="User Name"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};


export default RegisterForm;