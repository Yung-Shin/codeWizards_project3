import React from 'react';
import styled from 'styled-components';

// Styled-components creates a new component with the applied styles.
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fafafa;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #dbdbdb;
  background-color: white;
  border-radius: 1px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 7px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
`;

const SubmitButton = styled.button`
  padding: 7px;
  border: none;
  background-color: #0095f6;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #b2dffc;
  }
`;

const LoginPage = () => {
    return (
        <Container>
            <LoginForm>
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <SubmitButton type="submit">Login</SubmitButton>
            </LoginForm>
        </Container>
    );
};

export default LoginPage;
