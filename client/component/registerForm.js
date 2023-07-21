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
            {/* Your registration form content */}
        </div>
    );
};

export default RegisterForm;