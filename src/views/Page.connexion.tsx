import React from 'react';
import { Box, FormControl, OutlinedInput, FormHelperText, Button } from '@mui/material';
import Requestapi from '../services/Requestapi';
import AlertMessage from '../components/message/Alert.message';
import { Navigate, redirect } from 'react-router-dom';

interface connexionInput {
  label : string;
  grid?: boolean;
  placeholder : string;
  type : string;
  value : any;
  onChange : any;
  required : boolean;
}

interface connexionForm {
  username : string;
  password : string;
}


const Connexion = () => {
  const [connexionForm, setConnexionForm] = React.useState<connexionForm>({
    username : "",
    password : "",
  });

  const [alert, setAlert] = React.useState<boolean>(false);

  console.log(connexionForm);

  const sendRequest = async () => {
    Requestapi.login(connexionForm.username, connexionForm.password)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
    }).catch((error) => {
      setAlert(true);
    });

  };
  const connexionInputs : connexionInput[] = [
    {
      label : "Username",
      placeholder : "Username",
      grid : true,
      type : "text",
      value : connexionForm.username,
      onChange : (e : any) => setConnexionForm({...connexionForm, username : e.target.value}),
      required : true,
    },
    {
      label : "Password",
      placeholder : "Password",
      grid : true,
      type : "password",
      value : connexionForm.password,
      onChange : (e : any) => setConnexionForm({...connexionForm, password : e.target.value}),
      required : true,
    },
  ];

  return (
    <>
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          border: '1px solid #2E3B55',
          borderRadius: '10px',
          padding: '20px',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2 style={{
          textAlign: 'center',
          marginBottom: '20px',
        }}>Connexion</h2>
        <form noValidate autoComplete="off" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {connexionInputs.map((input, index) => {
            return (
              <FormControl
                key={index}
                style={{
                  marginBottom: '20px',
                }}
                fullWidth={input.grid}
                variant="outlined"
              >
                <OutlinedInput
                  id="component-outlined"
                  type={input.type}
                  value={input.value}
                  onChange={input.onChange}
                  placeholder={input.placeholder}
                  required={input.required}
                />
                <FormHelperText id="my-helper-text">{input.label}</FormHelperText>
              </FormControl>
            );
          })}
        </form>
        <Button variant="contained" sx={
          {
            backgroundColor: '#2E3B55',
            color: 'white',
            width: '25ch',
            marginTop: '20px',
            marginBottom: '20px',
            margin: 'auto',
            ":focus": {
              backgroundColor: '#2E3B55',
            },
          }
        }
        onClick={sendRequest}
        >Connexion</Button>
        <h6 style={{
          textAlign: 'center',
          marginTop: '20px',
        }}>Pas encore de compte ? <a href="/inscription">Inscrivez-vous</a>
        </h6>
      </div>
    </Box>
    {
      localStorage.getItem('token') ? <Navigate to="/dashboard" /> : null
    }

    <AlertMessage
      message="Erreur lors de la connexion."
      open={alert}
      severity="error"
    />
    
    </>
  );
};

export default Connexion;
