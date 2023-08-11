import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@mui/material';

function LogOutButton(props) {
  const dispatch = useDispatch();

  return (
    <Button
      variant="outlined"
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
      sx={{
        color: 'black',
        '&:hover': {
          backgroundColor: 'antiquewhite',
        },
      }}
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;
