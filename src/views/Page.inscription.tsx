import React from 'react';
import { Box, FormControl, OutlinedInput, FormHelperText, Button, TextField } from '@mui/material';
import { useEffect } from 'react';
import Requestapi from '../services/Requestapi';
import AlertMessage from '../components/message/Alert.message';
import { Navigate } from 'react-router-dom';

interface inscriptionInput { 
  label : string;
  grid?: boolean;
  placeholder : string;
  type : string;
  value : any;
  onChange : any;
  required : boolean;
}

interface inscriptionForm {
  prenom : string;
  nom : string;
  email : string;
  password : string;
  passwordConfirmation : string;
  telephone : string;
  entreprise : string;
}



const Inscription = () => {
  const [inscriptionForm, setInscriptionForm] = React.useState<inscriptionForm>({
    prenom : "",
    nom : "",
    email : "",
    password : "",
    passwordConfirmation : "",
    telephone : "",
    entreprise : "",
  });

  const [alert, setAlert] = React.useState<boolean>(false);

  const sendRequest = async () => {
    Requestapi.signup(inscriptionForm.prenom, inscriptionForm.nom, inscriptionForm.email, inscriptionForm.password, inscriptionForm.telephone, inscriptionForm.entreprise)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
    }).catch((error) => {
      setAlert(true);
    });

  };
  const inscriptionInputs : inscriptionInput[] = [
    {
      label : "Prénom",
      placeholder : "Prénom",
      grid : true,
      type : "text",
      value : inscriptionForm.prenom,
      onChange : (e : any) => setInscriptionForm({...inscriptionForm, prenom : e.target.value}),
      required : true,
    },
    {
      label : "Nom",
      placeholder : "Nom",
      grid : true,
      type : "text",
      value : inscriptionForm.nom,
      onChange : (e : any) => setInscriptionForm({...inscriptionForm, nom : e.target.value}),
      required : true,
    },
    {
      label : "Email",
      placeholder : "Email",
      grid : true,
      type : "email",
      value : inscriptionForm.email,
      onChange : (e : any) => setInscriptionForm({...inscriptionForm, email : e.target.value}),
      required : true,
    },
    {
      label : "Mot de passe",
      placeholder : "Mot de passe",
      grid : true,
      type : "password",
      value : inscriptionForm.password,
    
      onChange : (e : any) => setInscriptionForm({...inscriptionForm, password : e.target.value}),
      required : true,
    },
    {
      label : "Confirmation du mot de passe",
      placeholder : "Confirmation du mot de passe",
      grid : true,
      type : "password",
      value : inscriptionForm.passwordConfirmation,
      onChange : (e : any) => setInscriptionForm({...inscriptionForm, passwordConfirmation : e.target.value}),
      required : true,
    },
    
    {
      label : "Téléphone",
      placeholder : "Téléphone",
      grid : true,
      type : "number",
      value : inscriptionForm.telephone,
      onChange : (e : any) => setInscriptionForm({...inscriptionForm, telephone : e.target.value}),
      required : true,
    },
    {
      label : "Entreprise",
      placeholder : "Entreprise",
      grid : true,
      type : "text",
      value : inscriptionForm.entreprise,
      onChange : (e : any) => setInscriptionForm({...inscriptionForm, entreprise : e.target.value}),
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
        }}
      >
        <h2 style={{
          textAlign: 'center',
          marginBottom: '20px',
        }}>Inscription</h2>
        <form noValidate autoComplete="off" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

          {
            inscriptionInputs.map((input, index) => {
              return (
              <FormControl key={index} style={{ width: "50ch", marginBottom: 2, padding: 10 }}>
                <TextField
                  id="outlined-basic"
                  label={input.label}
                  variant="outlined"
                  placeholder={input.placeholder}
                  type={input.type}
                  value={input.value}
                  onChange={input.onChange}
                  required={input.required}
                />
              </FormControl>
              )
            })
          }

        

        </form>
        <Button variant="contained" 
        type='submit'
        sx={
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
        >Inscription</Button>

        <h6 style={{
          textAlign: 'center',
          marginBottom: '20px',
        }}>Déjà un compte ? <a href="/connexion">Connectez-vous</a>
        </h6>
      </div>
    </Box>
        {
localStorage.getItem('token') ? <Navigate to="/dashboard" /> : null        }
    <AlertMessage
    message="Erreur lors de l'inscription."
    open={alert}
    severity="error"
  />
  </>
  );
};

export default Inscription;
