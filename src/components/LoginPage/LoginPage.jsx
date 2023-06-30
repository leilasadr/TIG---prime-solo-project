import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Container } from '@mui/material';
import LoginForm from '../LoginForm/LoginForm';

function LoginPage() {
  const history = useHistory();

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <LoginForm />

        <Button variant="text" color="primary" onClick={() => history.push('/registration')}>
          Create Account
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;
