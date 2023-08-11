import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, TextField, Typography } from '@mui/material';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ maxWidth: '300px', margin: '0 auto' }}
    >
      <Typography variant="h3">
        Create Account
      </Typography>
      {errors.registrationMessage && (
        <Typography variant="subtitle2" color="error" sx={{ mb: 2 }}>
          {errors.registrationMessage}
        </Typography>
      )}
      <Box component="form" onSubmit={registerUser} sx={{ width: '100%' }}>
        <TextField
          label="Username"
          type="text"
          name="username"
          value={username}
          required
          onChange={(event) => setUsername(event.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit" sx={{ mb: 2 }}>
          Create Account
        </Button>
      </Box>
    </Box>
  );
}

export default RegisterForm;
