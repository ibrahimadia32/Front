import React from "react";
import { Box, FormControl, OutlinedInput, FormHelperText, Button } from '@mui/material';

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
          alignItems: 'center',
        }}
      >
        <h2 style={{
          textAlign: 'center',
          marginBottom: '20px',
        }}>Ajouter </h2>
        <form noValidate autoComplete="off" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <FormControl style={{ width: '25ch', marginBottom: 2, padding: 10 }}>
            <OutlinedInput placeholder="Image" />
          </FormControl>

          <FormControl style={{ width: '25ch', marginBottom: 2, padding: 10 }}>
            <OutlinedInput placeholder="Nom " />
          </FormControl>

          <FormControl style={{ width: '25ch', marginBottom: 2, padding: 10 }}>
            <OutlinedInput placeholder="Salaire" />
          </FormControl>
    
          <FormControl style={{ width: '25ch', marginBottom: 2, padding: 20  }}>
            <OutlinedInput placeholder="Description" />
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
        }>Ajouter</Button>
      </div>
    </Box>
  );
};

export default Connexion;
