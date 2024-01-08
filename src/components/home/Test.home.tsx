import * as React from 'react';
import { Box, Tab, Tabs} from '@mui/material';

export default function TestHome() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
    <Tabs value={value} onChange={handleChange} centered>
      <Tab label="Tableau de bord"/> 
      <Tab label="Personne" />
      <Tab label="Slide" />
    </Tabs>
  </Box>
  );
}