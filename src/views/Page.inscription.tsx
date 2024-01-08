import React from 'react';
import { Box, FormControl, OutlinedInput, FormHelperText, Button, TextField } from '@mui/material';

const Connexion = () => {
  return (
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
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <FormControl style={{ width: '25ch', marginBottom: 2, padding: 10 }}>
              <OutlinedInput placeholder="Prénom" />
            </FormControl>

            <FormControl style={{ width: '25ch', marginBottom: 2, padding: 10 }}>
              <OutlinedInput placeholder="Nom" />
            </FormControl>
          </div>

          {/* Champ de date ajouté */}
          <FormControl style={{ width: '52ch', marginBottom: 2, padding: 10 }}>
            <TextField
              id="date"
              label="Date de naissance"
              type="date"
              defaultValue="2000-01-01"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>

          <FormControl style={{ width: '52ch', marginBottom: 2, padding: 10 }}>
            <OutlinedInput placeholder="Adresse" />
          </FormControl>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <FormControl style={{ width: '25ch', marginBottom: 2, padding: 10 }}>
              <OutlinedInput placeholder="Code postal" />
            </FormControl>

            <FormControl style={{ width: '25ch', marginBottom: 2, padding: 10 }}>
              <OutlinedInput placeholder="Ville" />
            </FormControl>
          </div>

          <FormControl style={{ width: '52ch', marginBottom: 2, padding: 10 }}>
            <OutlinedInput placeholder="Pays" />
          </FormControl>

          <FormControl style={{ width: '52ch', marginBottom: 2, padding: 10 }}>
            <OutlinedInput placeholder="E-mail" />
          </FormControl>

          <FormControl style={{ width: '52ch', marginBottom: 2, padding: 10 }}>
            <OutlinedInput placeholder="Numéro de téléphone" />
          </FormControl>

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
        }>Inscription</Button>
      </div>
    </Box>
  );
};

export default Connexion;
