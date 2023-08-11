import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '@mui/material';

import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to TIG!');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
   <div className="landingContainer">
    <div className="container" >
      {/* <h2>{heading}</h2> */}

      <div className="grid">
        <div className="grid-col grid-col_8">

         
          
        </div>

        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            {/* <h4 style={{ backgroundColor: 'antiquewhite' }}>Already a Member?</h4> */}
            <Button  onClick={onLogin}>
              Login
            </Button>
          </center>
        </div>
      </div>
    </div>
   </div>
  );
}

export default LandingPage;
