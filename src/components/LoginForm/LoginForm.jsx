import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Box, Button, TextField, Typography } from '@mui/material';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  };

  return (
    <form onSubmit={login}>
      <Typography variant="h2">Login</Typography>
      {errors.loginMessage && (
        <Typography variant="h3" color="error" role="alert">
          {errors.loginMessage}
        </Typography>
      )}
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Username"
          name="username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant="contained" type="submit">
          Log In
        </Button>
      </Box>
    </form>
  );
}

export default LoginForm;
