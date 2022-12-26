import React from 'react'
import {Wrapper, Box, FormContainer, Input, Button} from './style';

export const SignIn: React.FC = () => {
  return (
    <Wrapper>
      <Box>
        <h1>Login</h1>
        <FormContainer>
            <label htmlFor="username">Username</label>
            <Input placeholder='Username'></Input>
            <label htmlFor="Password">Password</label>
            <Input placeholder='Password'></Input>
            <Button>Submit</Button>
        </FormContainer>
      </Box>
    </Wrapper>
  )
}
