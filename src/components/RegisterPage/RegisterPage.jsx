import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ maxWidth: '300px', margin: '0 auto' }}
    >
      <RegisterForm />
      <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
        Already have an account?{' '}
        <Button
          variant="text"
          size="small"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </Typography>
    </Box>
  );
}

export default RegisterPage;
